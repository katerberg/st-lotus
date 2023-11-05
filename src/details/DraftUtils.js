export function getDraftTitle(draft) {
  return draft.draft.replace('VRD Archives - ', '')
    .replace(/(\d+)/, ' $1')
    .replace(/([A-Z]+[a-z]+)/, '$1 ')
    .replace(/\s+/, ' ')
    .replace(/([A-Z][A-Z][A-Z]+)([a-z]+)/, (_, tall, short) => `${tall.charAt(0).toUpperCase() + tall.substr(1).toLowerCase().slice(0, -1)} ${tall.substr(-1).toUpperCase()}${short}`)
    .replace(/([A-Z][A-Z][A-Z]+)/, (match) => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase())
    .trim();
}

