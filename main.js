// import { envatoAPI_data, envatoRequest_URLs } from './setup.js';

const envatoAPI_data = {
  redirect_uri: 'https://abramo.xyz/envato',
  tokenUrl: 'https://api.envato.com/token',
  clientId: 'abramoxyz-4hwhyoxs',
  clientSecret: 'yEkML5SeWpkQ2w0aZYOXWJLLtPJGKcii',
  authorizationCode: ''
}

// HTML Content to show depending on the user current step
const verification_content = [
  // if the user is not authenticated
  `<a class="btn btn-primary rounded auth" href="https://api.envato.com/authorization?response_type=code&client_id=${envatoAPI_data.clientId}&redirect_uri=${envatoAPI_data.redirect_uri}" target="_blank">Authenticate Now</a>`,
  // if the user is authenticated
  `<p>NO CONTENT YET for verified completed</p>`,
  // if there is an unexpected error
  `<p>ERROR</p>`
];

// URL of the current page, use has or get to check or retreive string
const urlCheck = new URLSearchParams(window.location.search);

var authorizationCode;

// Check the current page URL
function currentURL() {
  if (urlCheck.has('code') === false) {
    authUser(); // Display Authentication Button
  } else if (urlCheck.has('code') === true) {
    // Get the Authentication Code
    authorizationCode = urlCheck.get('code');
    console.log("Authorization Code:", authorizationCode);
    envatoAPI_data.authorizationCode = authorizationCode;
    // Start Function To Request Access Token
    reqAccessToken();
  } else {
    document.getElementById("verification").innerHTML = verification_content[2];
  }
}
currentURL();

// function to display authentication button
function authUser() {
  console.log('authUser Function is executed.');
  document.getElementById("verification-pending").innerHTML = verification_content[0];
}

// function to request access token
function reqAccessToken() {
  console.log('reqAccessToken Function is executed.');
  document.getElementById("verification-pending").innerHTML = verification_content[1];


  // Start the Request
  const requestBody = new URLSearchParams({
    grant_type: "authorization_code",
    code: envatoAPI_data.authorizationCode,
    client_id: envatoAPI_data.clientId,
    client_secret: envatoAPI_data.clientSecret,
  });

  fetch(`https://api.envato.com/token?grant_type=authorization_code&code=${envatoAPI_data.authorizationCode}&client_id=${envatoAPI_data.clientId}&client_secret=${envatoAPI_data.clientSecret}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: requestBody,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Use the access token for subsequent API requests
      console.log("Access Token:", data.access_token);
      // Store Access Token in Cookies
      document.cookie = "; accesstoken=" + data.access_token;
      const get_token = data.access_token;
      return get_token;
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

