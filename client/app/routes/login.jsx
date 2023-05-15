import Login from "../components/Login";
import styles from "../styles/LoginBox.css";
import { login } from "../services/auth.server";
import { getUserFromSession } from "../services/auth.server";
import { redirect, json } from "@remix-run/node";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
export default function LoginPage() {
  return <Login />;
}
export async function loader({ request }) {
  const token = await getUserFromSession(request);
  if (token) {
    return redirect("/main");
  }
  return null;
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
  const response = await login(data.email, data.password);
  return response;
  } catch (error) {
    // console.log(error.message);
    return json({message:error.message});
   }
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

// export function ErrorBoundary() {
//   const error = useRouteError();

//   if (isRouteErrorResponse(error)) {
//     return (
//       <div>
//         <h1>
//           {error.status} {error.statusText}
//         </h1>
//         <p>{error.data}</p>
//       </div>
//     );
//   } else if (error instanceof Error) {
//     return (
//       <div>
//         <h1>Error</h1>
//         <p>{error.message}</p>
//         <p>The stack trace is:</p>
//         <pre>{error.stack}</pre>
//       </div>
//     );
//   } else {
//     return <h1>Unknown Error</h1>;
//   }
// }t
