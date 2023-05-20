import { createCookieSessionStorage, redirect } from "@remix-run/node";
// const SESSION_SECRET = "S3CRET";
import { json } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    secrets: ["S3SR$T"],
    sameSite: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
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

// export async function getUserInfo(request) {
//   // const session = await sessionStorage.getSession(
//   //   request.headers.get("cookie")
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

// export async function login(email, password) {
//   // const session = await sessionStorage.getSession();
//   const response = await fetch("https://registrytotal.herokuapp.com/login", {
//     method: "POST",
//     credentials: "include",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({ email: email, password: password }),
//   });
//   // console.log(response.ok);
//   if (response.ok === false) throw new Error("Invalid Credentials, please try again");
//   else {
//     const user = await response.json();
//     // if (!user) {
//     //   // const error = new Error("Invalid login");
//     //   // error.status = 401;
//     //   // throw error;
//     //   session.flash('error', "Invalid login");
//     //   return redirect("/login", {
//     //     headers: {
//     //       "Set-Cookie": await commitSession(session),
//     //     },
//     //   });
//     // }
//     // console.log(user);

//     // return createUserSession(user.token, "/main");
//     return createUserSession(user.session, "/main");
//   }
// }
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
