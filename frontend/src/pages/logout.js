import { redirect } from "react-router-dom";

export function logoutAction() {
  localStorage.removeItem("authToken");
  return redirect("/");
}
