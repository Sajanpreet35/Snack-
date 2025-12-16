// VERY SIMPLE client‑side heuristic (no tracking)
export function privacyScore(url) {
  if (!url.startsWith('https')) return 'weak'
  if (url.includes('ads') || url.includes('track')) return 'weak'
  return 'safe'
}
