// import { envatoAPI_data, API_URL } from './setup.js';

const envatoAPI_data = {
  redirect_uri: 'https://abramo.xyz/envato',
  tokenUrl: 'https://api.envato.com/token',
  clientId: 'abramoxyz-4hwhyoxs',
  clientSecret: 'yEkML5SeWpkQ2w0aZYOXWJLLtPJGKcii',
  authorizationCode: ''
}

const API_URL = {
  // List purchases
  listPurchases: 'https://api.envato.com/v3/market/buyer/list-purchases',
  // Download purchased items by either the item_id or the purchase_code. Each invocation of this endpoint will count against the items daily download limit.
  download: 'https://api.envato.com/v3/market/buyer/download',
  // Lists all purchases that the authenticated user has made of the app creator's listed items
  purchases: 'https://api.envato.com/v3/market/buyer/purchases',
  // Lists all of the user's bookmarks
  bookmarks: 'https://api.envato.com/v3/market/user/bookmarks',
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
      // Store Access Token in Cookies
      document.cookie = "; accesstoken=" + data.access_token;
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// function to get cookie name
function getCookie(cookieName) {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null; // Cookie not found
}
getCookie('accesstoken');

// get all purchased items
const token = getCookie('accesstoken');
var apiUrl = API_URL.listPurchases;

// Set up the headers with the Authorization token
const headers = new Headers({
  "Authorization": `Bearer ${token}`
});

// Make the API request using fetch (GET method)
fetch(apiUrl, { method: "GET", headers })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the data from the API response
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error("Error fetching data:", error);
  });
