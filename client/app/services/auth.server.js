import { createCookieSessionStorage, redirect } from "@remix-run/node";
// const SESSION_SECRET = "S3CRET";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name:'session',
    path: "/",
    secure: process.env.NODE_ENV === "production",
    secrets: ["S3SR$T"],
    sameSite: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});


async function createUserSession(sessionToken, redirectPath) {
  const session = await sessionStorage.getSession();
  session.set("sessionToken", sessionToken);
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
  
  const token = session.get("sessionToken");
  // console.log(token);
  if (!token) {
    return null;
  }

  return token;
}
// export async function getUserInfo(request) {
//   // const session = await sessionStorage.getSession(
//   //   request.headers.get("cookie")
//   // );
//   // const data = session.get("token");
//   // const response = await fetch(
//   //   "https://sleepy-coast-93816.herokuapp.com/api/v1/users/getMe",
//   //   {
//   //     method: "GET",
//   //     headers: {
//   //       "content-type": "application/json",
//   //       Authorization: `Bearer ${data}`,
//   //     },
//   //   }
//   // );
//    const response = await fetch(
//       "https://registrytotal.herokuapp.com/api/staff/",
//       {
//         method: "GET",
//         headers: {
//           "content-type": "application/json",
//         },
//       }
//     );
//   const resData = await response.json();
//   console.log(resData);
//   if (resData.status !== "success") {
//     throw new Error("invalid request");
//   }

//   return resData;
// }
export async function destroyUserSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("cookie")
  );
  // console.log(session.get("sessionToken"));
  // if (!session.get("token")) {
  //   return redirect("/login");
  // }
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
  // const response = await fetch(
  //   "https://sleepy-coast-93816.herokuapp.com/api/v1/users/login",
  //   {
  //     method: "POST",
  //     credentials: "include",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ email: email, password: password }),
  //   }
  // );
  const session = await sessionStorage.getSession();
  const response = await fetch("https://registrytotal.herokuapp.com/login", {
    method: "POST",
    credentials: "include",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  });
  const user = await response.json();
  // console.log(user.token);
  if (!user) {
    // const error = new Error("Invalid login");
    // error.status = 401;
    // throw error;
    session.flash('error', "Invalid login");
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  // return createUserSession(user.token, "/main");
  return createUserSession(user.session, "/main");
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
  console.log(resData);
  return resData;
}
