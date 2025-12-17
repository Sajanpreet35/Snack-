import { searchWikipedia } from './hubs/wikipedia.js'
import { getCountryNews } from './hubs/news.js'

// --------------------
// Wikipedia Search
// --------------------
window.search = async () => {
  const q = document.getElementById('q').value
  if (!q) return

  document.getElementById('results').innerHTML = 'Loading...'
  document.getElementById('stats').innerHTML = ''

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
      <small>Source: Wikipedia</small><br/>
      Results: ${data[0].count}<br/>
      <a href="${data[0].url}" target="_blank">Open</a>
    </div>
  `
}

// --------------------
// 🌍 Live World News
// --------------------
window.searchNews = async () => {
  const q = document.getElementById('q').value || 'World'

  document.getElementById('results').innerHTML = '🌍 Loading live global news...'
  document.getElementById('stats').innerHTML = ''

  const news = await getCountryNews(q)

  document.getElementById('stats').innerHTML = `
    <div class="card">
      🌍 Live News: ${news.length}<br/>
      🔐 Privacy: No tracking • No cookies
    </div>
  `

  document.getElementById('results').innerHTML = news.map(n => `
    <div class="card">
      <b>${n.title}</b><br/>
      <small>${n.source || 'Global'} • ${n.date}</small><br/>
      <a href="${n.url}" target="_blank">Read original</a>
    </div>
  `).join('')
}
