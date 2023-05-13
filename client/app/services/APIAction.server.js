
// import { getUserFromSession,createUserSession } from './auth.server';
// export async function login(email, password) {
//     const response = await fetch(
//       "https://sleepy-coast-93816.herokuapp.com/api/v1/users/login",
//       {
//         method: "POST",
//         credentials: "include",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ email: email, password: password }),
//       }
//     );
//     const user = await response.json();
//     console.log(user);
//     // console.log(user.token);
//     if (user.status !== "success") {
//       const error = new Error("Invalid login");
//       error.status = 401;
//       throw error;
//     }
  
//     return createUserSession(user.token, "/main");
//   }

//   export async function changePassword(cu, moi, confirmMoi) {
//     const data = {
//       passwordCurrent: cu,
//       password: moi,
//       passwordConfirm: confirmMoi,
//     };
//     const response = await fetch(
//       "https://sleepy-coast-93816.herokuapp.com/api/v1/users/updatePassword",
//       {
//         method: "PATCH",
//         headers: {
//           "content-type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       })
//       const resData = await response.json();
//       console.log(resData);
//       return resData;
//   } 