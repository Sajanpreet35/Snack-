import { searchOpenAlex } from './hubs/openalex.js'
import { searchArxiv } from './hubs/arxiv.js'
import { searchWikipedia } from './hubs/wikipedia.js'
import { searchArchive } from './hubs/archive.js'
import { privacyScore } from './privacy/privacyScore.js'

window.search = async () => {
  const q = document.getElementById('q').value
  if (!q) return

  document.getElementById('results').innerHTML = 'Loading...'

  const sources = await Promise.all([
    searchOpenAlex(q),
    searchArxiv(q),
    searchWikipedia(q),
    searchArchive(q)
  ])

  const flat = sources.flat()
  const total = flat.reduce((s, x) => s + (x.count || 0), 0)

  document.getElementById('stats').innerHTML = `
    <div class="card">
      🔢 <b>Total Results (estimated):</b> ${total.toLocaleString()}<br/>
      🔐 <b>Privacy:</b> No cookies • No tracking • Client‑side only
    </div>
  `

  document.getElementById('results').innerHTML = flat.map(r => `
    <div class="card">
      <b>${r.title}</b><br/>
      <small>Source: ${r.source} • Results: ${r.count.toLocaleString()}</small><br/>
      <span class="${privacyScore(r.url) === 'safe' ? 'safe' : 'warn'}">
        Privacy: ${privacyScore(r.url)}
      </span><br/>
      <a href="${r.url}" target="_blank">Open</a>
    </div>
  `).join('')
}
