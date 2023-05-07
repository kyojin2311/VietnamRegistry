import DOMPurify from "dompurify";
import Login from "../components/Login";
import styles from "../styles/LoginBox.css";
// import { login } from "../services/auth.server";
import { Link } from "@remix-run/react";
// import authenticator from "~/services/auth.server";
// import { sessionStorage } from "~/services/session.server";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return <Link to='login'>login pls</Link>;
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };
//   console.log(data);
//   try {
//     const response = await login(data.email, data.password);
//     console.log(response);
//     return response;
//   } catch (error) {
//     if (error.status === 401) {
//       return error;
//     }
//   }

  // const response = await fetch(
  //   "https://sleepy-coast-93816.herokuapp.com/api/v1/users/login",
  //   {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   }
  // );
  // const resData = await response.json();
  // console.log(resData);

  // if (resData.status === 'success') return redirect("/home");
  // else return redirect("/");
  //   const resp = await authenticator.authenticate("form",request,{
  //     successRedirect: "/home",
  //     failureRedirect: "/",
  //     throwOnError: true,
  //     context,
  //   });
  //   console.log(resp.input);
  //   return resp;
  // }

  // export async function loader({request}) {
  //   await authenticator.isAuthenticated(request, {
  //     successRedirect: "/",
  //   });

  //   const session = await sessionStorage.getSession(
  //     request.headers.get("Cookie")
  //   );

  //   const error = session.get("sessionErrorKey");
  // return null;
// }

// export function links() {
//   return [
//     {
//       rel: "stylesheet",
//       href: styles,
//     },
//   ];
// }
