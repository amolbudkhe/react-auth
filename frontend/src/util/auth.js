export function getAuthToken() {
  return localStorage.getItem("token");
}

export function authTokenLoader() {
  return getAuthToken();
}