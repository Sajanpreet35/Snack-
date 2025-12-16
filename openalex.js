export async function searchOpenAlex(q) {
  const r = await fetch(`https://api.openalex.org/works?search=${encodeURIComponent(q)}`)
  const j = await r.json()
  return [{
    title: 'Research Papers (OpenAlex)',
    source: 'OpenAlex',
    count: j.meta.count || 0,
    url: 'https://openalex.org'
  }]
}
