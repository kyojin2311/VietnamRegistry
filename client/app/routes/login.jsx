import Login from "../components/Login";
import styles from "../styles/LoginBox.css";
import { login } from "../services/APIAction.server";
import { getUserFromSession } from "../services/auth.server";
import { redirect, json } from "@remix-run/node";
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