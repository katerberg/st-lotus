

export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

export function docsLinkToCsv(followingDraft: string) {
  if (!followingDraft) {
    return '';
  }
  const trimmedFollowingDraft = followingDraft.trim();

  const result =   new RegExp('https://docs.google.com/spreadsheets/d/(.*)/edit').exec(trimmedFollowingDraft)
  if (!result || !result[1]) {
    return '';
  }
  const followingDraftId = result[1];
  
  const baseDraftUrl = `https://docs.google.com/spreadsheets/d/${followingDraftId}/export?format=csv`
  const gid = trimmedFollowingDraft.split('#gid=')[1];

  return gid ? baseDraftUrl + `&gid=${gid}` : baseDraftUrl
}