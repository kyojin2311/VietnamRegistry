import Login from "../components/Login";
import styles from "../styles/LoginBox.css";
import { login } from "../services/auth.server";
import { getUserFromSession } from "../services/auth.server";
import { redirect } from "@remix-run/node";
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
  // const token = await getUserFromSession(request);
  // if (token) {
  //   return redirect("/login", {
  //     headers: {
  //       "Set-Cookie": await sessionStorage.destroySession(session),
  //     },
  //   });  } else {
    const formData = await request.formData();
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // console.log(data);
    try {
      const response = await login(data.email, data.password);
      // console.log(response);
      return response;
    } catch (error) {
      if (error.status === 401) {
        return error;
      }
    }
  }
// }

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
