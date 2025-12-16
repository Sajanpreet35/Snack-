export async function searchArxiv(q) {
  const r = await fetch(`https://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(q)}&max_results=1`)
  const text = await r.text()
  const match = text.match(/<opensearch:totalResults>(\d+)<\/opensearch:totalResults>/)
  return [{
    title: 'arXiv Preprints',
    source: 'arXiv',
    count: match ? Number(match[1]) : 0,
    url: 'https://arxiv.org'
  }]
}
