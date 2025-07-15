// github_api.js - Helper for GitHub API requests (vanilla JS)
async function githubApiRequest(url, method = 'GET', data = null, token = null, accept = 'application/vnd.github+json') {
  const headers = {
    'Accept': accept,
    'User-Agent': 'GitalkForumApp',
  };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  let opts = { method, headers };
  if (data) {
    opts.body = JSON.stringify(data);
    headers['Content-Type'] = 'application/json';
  }
  const res = await fetch(url, opts);
  let body = null;
  try { body = await res.json(); } catch {}
  return { status: res.status, body };
}
