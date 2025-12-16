export async function searchArchive(q) {
  const r = await fetch(`https://archive.org/advancedsearch.php?q=${encodeURIComponent(q)}&output=json`)
  const j = await r.json()
  return [{
    title: 'Books & Media (Internet Archive)',
    source: 'Internet Archive',
    count: j.response.numFound || 0,
    url: 'https://archive.org'
  }]
}
