import { getUserFromSession, createUserSession,requireUserSession } from "./auth.server";

//Login with api
export async function login(email, password) {
  const response = await fetch("https://registrytotal.herokuapp.com/login", {
    method: "POST",
    credentials: "include",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  });
  if (response.ok === false)
    throw new Error("Invalid Credentials, please try again");
  else {
    const user = await response.json();
    return createUserSession(user.session, "/main");
  }
}

