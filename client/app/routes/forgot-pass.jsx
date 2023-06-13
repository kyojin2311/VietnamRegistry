import ForgotPass from "../components/UI/ForgotPassword";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
export default function ForgotPasswordPage() {
  const message = useActionData();
  return (
    <>
      <ForgotPass />
    </>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = formData.get("resetemail");
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/forgot-password",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: data }),
    }
  );
  const resData = await response.json();
  return json({ message: resData });
}
