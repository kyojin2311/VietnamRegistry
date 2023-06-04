import { createCookieSessionStorage, redirect } from "@remix-run/node";
// const SESSION_SECRET = "S3CRET";
import { json } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    secrets: ["S3SR$T"],
    sameSite: "lax",
    maxAge: 30 * 24 * 60,
    httpOnly: true,
  },
});
export async function createUserSession(sessionToken, redirectPath) {
  const session = await sessionStorage.getSession();
  session.set("sessionToken", sessionToken);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}
export async function getUserFromSession(request) {
  const data = request.headers.get("cookie");
  const session = await sessionStorage.getSession(data);
  const token = session.get("sessionToken");
  if (!token) {
    return null;
  }
  return token;
}
export async function destroyUserSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("cookie")
  );
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function requireUserSession(request) {
  const token = await getUserFromSession(request);
  if (!token) {
    throw redirect("/login");
  }
  return token;
}
export async function changePassword(cu, moi, confirmMoi) {
  const token = await getUserFromSession(request);
  if (!token) {
    redirect("login");
  }
  const data = {
    passwordCurrent: cu,
    password: moi,
    passwordConfirm: confirmMoi,
  };
  const response = await fetch(
    "https://sleepy-coast-93816.herokuapp.com/api/v1/users/updatePassword",
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const resData = await response.json();
  return resData;
}
