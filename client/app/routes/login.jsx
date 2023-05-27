import Login from "../components/Login";
import { login } from "../services/APIAction.server";
import { requireUserSession } from "../services/auth.server";
import { redirect, json } from "@remix-run/node";
export default function LoginPage() {
  return <Login />;
}
// export async function loader({ request }) {
//   const token = await requireUserSession(request);
//   if (!token) {
//     return null;
//   }
//   return redirect("/");
// }
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
