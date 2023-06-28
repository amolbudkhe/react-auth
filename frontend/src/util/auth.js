import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("tokenExpiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const authToken = localStorage.getItem("authToken");
  const tokenDuration = getTokenDuration();

  if (!authToken) {
    return null;
  }

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return authToken;
}

export function authTokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const authToken = getAuthToken();

  if (!authToken) {
    return redirect("/auth");
  }

  return null;
}
