import { searchWikipedia } from './hubs/wikipedia.js'

window.search = async () => {
  const q = document.getElementById('q').value
  if (!q) return

  document.getElementById('results').innerHTML = 'Loading...'

  const data = await searchWikipedia(q)

  document.getElementById('stats').innerHTML = `
    <div class="card">
      🔢 Results: ${data[0].count.toLocaleString()}<br/>
      🔐 Privacy: No tracking • No cookies
    </div>
  `

  document.getElementById('results').innerHTML = `
    <div class="card">
      <b>${data[0].title}</b><br/>
      Source: Wikipedia<br/>
      Results: ${data[0].count}<br/>
      <a href="${data[0].url}" target="_blank">Open</a>
    </div>
  `
}
