import DOMPurify from "dompurify";
import Login from "../components/Login";
import styles from "../styles/LoginBox.css";
import { redirect } from "@remix-run/node";
export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return <Login />;
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  // const sendData = {
  //   email: DOMPurify.sanitize(data.email),
  //   password: DOMPurify.sanitize(data.password)
  // }
  const response = await fetch(
    "https://sleepy-coast-93816.herokuapp.com/api/v1/users/login",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const resData = await response.json();
  console.log(resData);
  if (response.ok) return redirect("/home");
  else return redirect("/");
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
