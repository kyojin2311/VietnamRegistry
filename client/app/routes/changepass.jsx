import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
export function meta () {
  return [{title: 'Change Password'}]
}
export default function changepassword() {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
          </h2>
          <Form class="mt-1 space-y-4 lg:mt-5 md:space-y-5" method="patch">
              <div>
                  <label for="old-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                  <input type="password" name="old-password" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" />
              </div>
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" /> 
              </div>
              <div>
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
              </div>
              <button  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
          </Form>
      </div>
  </div>
</section>
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
    passwordCurrent: formData.get("old-password"),
    password: formData.get("password"),
    passwordConfirm: formData.get("confirm-password"),
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
