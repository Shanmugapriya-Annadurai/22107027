let token = null;
export async function getAccessToken() {
  if (token) return token;
  const response = await fetch("http://20.244.56.144/evaluation-service/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clientId: process.env.REACT_APP_CLIENT_ID, clientSecret: process.env.REACT_APP_CLIENT_SECRET })
  });
  const data = await response.json();
  token = data.accessToken;
  return token;
}
