// SETUP Your API Here...
// Edit envatoAPI_data with your API data so the entire code works correctly
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

export { envatoAPI_data, API_URL };

