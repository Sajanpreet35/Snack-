export async function searchWikipedia(q) {
  const r = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&format=json&origin=*`
  )
  const j = await r.json()

  return [{
    title: "Wikipedia Articles",
    source: "Wikipedia",
    count: j.query.searchinfo.totalhits || 0,
    url: "https://wikipedia.org"
  }]
}
