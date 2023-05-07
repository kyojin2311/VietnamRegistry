import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
export default function changepassword() {
  return (
    <Form method="patch">
      <input name="passcu" type="password" placeholder="pass cu" />
      <input name="passmoi" type="password" placeholder="passmoi" />
      <input
        name="confirmpassmoi"
        type="password"
        placeholder="confirm passmoi"
      />
      <button>Thay doi</button>
    </Form>
  );
}
export async function loader({ request }) {
  const token = await requireUserSession(request);
  if (!token) {
    return redirect("/login");
  } else return token;
}
export async function action({ request }) {
    const token = await requireUserSession(request);
    if (!token) {
      return redirect("/login");
    }
  const formData = await request.formData();
  const data = {
    passwordCurrent: formData.get("passcu"),
    password: formData.get("passmoi"),
    passwordConfirm: formData.get("confirmpassmoi"),
  };
  console.log(data);
  try {
    const response = await fetch(
      "https://sleepy-coast-93816.herokuapp.com/api/v1/users/updatePassword",
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    const resData = await response.json();
    console.log(resData);
    if (resData.status !== 'success') {
      console.log("deo thanh cong");
      return new Error("Invalid change");
    } else {
      return redirect("/main");
    }
  } catch (error) {
    if (error.status === 401) {
      return error;
    }
  }
}
