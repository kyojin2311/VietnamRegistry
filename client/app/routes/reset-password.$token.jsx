import { json, redirect } from "react-router";
import ResetBox from "../components/UI/ResetBox";

export default function ResetPage() {
  return <ResetBox />;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = {
    newpassword: formData.get("newpassword"),
    confirmpassword: formData.get("cfpassword"),
    token: params.token,
    userId: params.userId,
  };
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/reset-password",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const resData = response.json();
  if (resData === "Password reset Successfully") {
    return redirect("/login");
  } else {
    return json({ message: resData });
  }
}
