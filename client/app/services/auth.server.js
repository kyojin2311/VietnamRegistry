import { createCookieSessionStorage, redirect } from "@remix-run/node";

const SESSION_SECRET = process.env.SESSION_SECRET;
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
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
