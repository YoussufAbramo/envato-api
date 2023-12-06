POST https://api.envato.com/token?grant_type=authorization_code&code=${authorizationCode}&client_id=abramoxyz-4hwhyoxs&client_secret=yEkML5SeWpkQ2w0aZYOXWJLLtPJGKcii


const currentURL= window.location.href;
const match = currentURL.match(/(?:\?code=)([^&]*)/);

if (match) {
  const authorizationCode = match[1];
  console.log("Code:", authorizationCode);
} else {
  console.log("Authorization Code not found in the URL.");
}
