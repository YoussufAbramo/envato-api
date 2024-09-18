<?php
get_header();
get_sidebar();


$clientId = '[YOUR CLIENT ID]';
$redirectUri = '[YOUR REDIRECT URI]';

$authorizationUrl = "https://api.envato.com/authorization?response_type=code&client_id={$clientId}&redirect_uri={$redirectUri}";

if (isset($_GET['code'])) {
    $authorizationCode = $_GET['code'];

    // Now you can use $authorizationCode to obtain an access token
    // (You'll need to make a POST request to the token endpoint)

    echo "Authorization Code: $authorizationCode";
} else {
    // If the code is not present, display the authorization button
    echo "<a href=\"$authorizationUrl\">Authorize</a>";
}


// Replace [CODE], [CLIENT_ID], and [CLIENT_SECRET] with your actual values
$code = '[AUTHORIZATION CODE]';
$clientId = '[YOUR CLIENT ID]';
$clientSecret = '[YOUR CLIENT SECRET]';

$tokenUrl = 'https://api.envato.com/token';
$postData = [
    'grant_type' => 'authorization_code',
    'code' => $code,
    'client_id' => $clientId,
    'client_secret' => $clientSecret,
];

$ch = curl_init($tokenUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
}

// Close cURL session
curl_close($ch);

// Process the token response
$tokenData = json_decode($response, true);

// Now $tokenData contains the access token
echo 'Access Token: ' . $tokenData['access_token']; 

$accessToken = 'c0lQ2WLYW9qAZ9RH12cH1fJPzVWSscXP';
$apiUrl = 'https://api.envato.com/v1/market/private/user/account.json';

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $accessToken,
]);

$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
}

// Close cURL session
curl_close($ch);

// Process the API response
$data = json_decode($response, true);

// Now $data contains the API response in an associative array
print_r($data);


get_footer();