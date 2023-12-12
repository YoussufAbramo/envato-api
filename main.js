// import { envatoAPI_data } from './setup.js';
const envatoAPI_data = {
  redirect_uri: 'https://abramo.xyz/envato',
  tokenUrl: 'https://api.envato.com/token',
  clientId: 'abramoxyz-4hwhyoxs',
  clientSecret: 'yEkML5SeWpkQ2w0aZYOXWJLLtPJGKcii',
  authorizationCode: authorizationCode,
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

// Get the current page URL
const currentURL = window.location.href;

// Check the current page URL
function urlCheck(currentURL) {
  const match = currentURL.match(/(?:\?code=)([^&]*)/);
  if (currentURL === 'https://abramo.xyz/envato/') {
    // Display Authintication Button
    authUser();
  } else if (match) {
    // if URL contains '?code=' get the code after '=' symbol
    const match = currentURL.match(/(?:\?code=)([^&]*)/);
    const authorizationCode = match[1];
    console.log("Code:", authorizationCode);
    // Send Access Token Request
    // reqAccessTokeen();
    test();
    return authorizationCode;
  } else {
    document.getElementById("verification").innerHTML = verification_content[2];
    console.error('Invalid boolean value. Expected 0 or 1.');
  }
}

// get Authentication Code
const authorizationCode = urlCheck(currentURL);

// function to display authentication button
function authUser() {
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

  fetch(tokenUrl, {
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
      console.log("Access Token:", data.access_token);
      // Use the access token for subsequent API requests
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}


// JUST FOR TESTING
function test() {
  console.log("TEST!!!!");
}





/////////////////////////////////////////// 
/////////////////////////////////////////// 
/////////////////////////////////////////// 
/////////// THE CODE ENDS HERE ////////////
/////////////////////////////////////////// 
/////////////////////////////////////////// 
/////////////////////////////////////////// 














const verification_content = [
  `<a class="btn btn-primary rounded auth" href="https://api.envato.com/authorization?response_type=code&client_id=abramoxyz-4hwhyoxs&redirect_uri=https://abramo.xyz/envato" target="_blank">Authenticate Now</a>`,

  `<p>NO CONTENT YET for verified completed</p>`
];


const currentURL = window.location.href;
if (currentURL == 'https://abramo.xyz/envato/') {
  document.getElementById("verification-pending").innerHTML = verification_content[0];
} else {
  if (match) {
    const authorizationCode = match[1];
    console.log("Code:", authorizationCode);
    // Now continue API

    const tokenUrl = "https://api.envato.com/token";
    const clientId = "abramoxyz-4hwhyoxs";
    const clientSecret = "yEkML5SeWpkQ2w0aZYOXWJLLtPJGKcii";

    const requestBody = new URLSearchParams({
      grant_type: "authorization_code",
      code: authorizationCode,
      client_id: clientId,
      client_secret: clientSecret,
    });

    fetch(tokenUrl, {
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
        console.log("Access Token:", data.access_token);
        // Use the access token for subsequent API requests
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });

  }
}


if (match) {
  const authorizationCode = match[1];
  console.log("Code:", authorizationCode);
} else {
  console.log("Authorization Code not found in the URL.");
}

