export function getDraftTitle(draft) {
  return draft.draft.replace('VRD Archives - ', '')
    .replace(/(\d+)/, ' $1')
    .replace(/([A-Z]+[a-z]+)/, '$1 ')
    .replace(/\s+/, ' ')
    .replace(/([A-Z][A-Z][A-Z]+)/, (match) => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase())
    .trim();
}

