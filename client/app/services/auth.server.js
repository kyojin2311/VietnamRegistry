// // app/services/auth.server.ts
// import { Authenticator, AuthorizationError } from 'remix-auth';
// import { FormStrategy } from 'remix-auth-form';
// import { sessionStorage } from '~/services/session.server';
// import { User } from './session.server';
// // Create an instance of the authenticator, pass a Type, User,  with what
// // strategies will return and will store in the session
// const authenticator = new Authenticator(sessionStorage, {
//   sessionKey: "sessionKey", // keep in sync
//   sessionErrorKey: "sessionErrorKey", // keep in sync
// });

// // Tell the Authenticator to use the form strategy
// authenticator.use(
//   new FormStrategy(async ({ form }) => {

//     // get the data from the form...
//     let email = form.get('email');
//     let password = form.get('password');

//     // initiialize the user here
//     let user = null;
//     // login the user, this could be whatever process you want
//     const response = await fetch('https://sleepy-coast-93816.herokuapp.com/api/v1/users/login', {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({email: email, password: password}),
//     });
//         const data = await response.json();
//     //  setToken(data.token)
//     user = {
//         token: data.token,
//     }
//     console.log(user);
//    return user;

//     //   // the type of this user must match the type you pass to the Authenticator
//     //   // the strategy will automatically inherit the type if you instantiate
//     //   // directly inside the `use` method

//   }),
// );
// // console.log(authenticator.isAuthenticated());

// export default authenticator

import { createCookieSessionStorage, redirect } from "@remix-run/node";

// const SESSION_SECRET = "S3CRET";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    secrets: ["S3SR$T"],
    sameSite: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

async function createUserSession(token, redirectPath) {
  const session = await sessionStorage.getSession();
  session.set("token", token);
  // console.log(session);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function getUserFromSession(request) {
  // console.log("alo");
  // console.log(request.headers.get("cookie"));
  const data = request.headers.get("cookie");
  const session = await sessionStorage.getSession(data);

  const token = session.get("token");
  // console.log(token);
  if (!token) {
    return null;
  }

  return token;
}
export async function getUserInfo(data) {
  // const session = await sessionStorage.getSession(
  //   request.headers.get("cookie")
  // );
  // const data = session.get("token");
  const response = await fetch(
    "https://sleepy-coast-93816.herokuapp.com/api/v1/users/getMe",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${data}`,
      },
    }
  );
  const resData = await response.json();
  if (resData.status !== "success") {
    throw new Error("invalid request");
  }
  console.log(resData);
  return resData;
}
export async function destroyUserSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("cookie")
  );
  console.log(session.get("token"));
  if (!session.get("token")) {
    return redirect("/login");
  }
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function requireUserSession(request) {
  // console.log(request.headers.get('cookie'));
  const token = await getUserFromSession(request);

  if (!token) {
    throw redirect("/login");
  }
  return token;
}

export async function login(email, password) {
  const response = await fetch(
    "https://sleepy-coast-93816.herokuapp.com/api/v1/users/login",
    {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    }
  );
  const user = await response.json();
  // console.log(user.token);
  if (user.status !== "success") {
    const error = new Error("Invalid login");
    error.status = 401;
    throw error;
  }

  return createUserSession(user.token, "/main");
}
export async function changePassword(cu, moi, confirmMoi) {
  const token = await getUserFromSession(request);
  if(!token) {
    redirect('login');
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
    })
    const resData = await response.json();
    console.log(resData);
    return resData;
} 
