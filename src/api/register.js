export async function registerApp() {
  const response = await fetch("http://20.244.56.144/evaluation-service/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "your-email@domain.edu",
      name: "Your Name",
      mobileNo: "9876543210",
      githubUsername: "yourGitHubUsername",
      rollNo: "YourRollNumber",
      accessCode: "AccessCodeFromEmail"
    })
  });
  return response.json();
}