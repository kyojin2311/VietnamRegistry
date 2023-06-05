import Login from "../components/UI/Login";
import { login } from "../services/APIAction.server";
import {
  getUserFromSession,
  requireUserSession,
} from "../services/auth.server";
import { redirect, json } from "@remix-run/node";
export default function LoginPage() {
  return <Login />;
}
export async function loader({ request }) {
  const token = await getUserFromSession(request);
  if (token) return redirect("/");
  else return null;
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
    return json({ message: error.message });
  }
}
