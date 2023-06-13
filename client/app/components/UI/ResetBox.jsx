import { Form, Link, useActionData } from "@remix-run/react";
import logo from "../../images/logo.png";
import { Alert } from "flowbite-react";
export default function ResetBox() {
  const data = useActionData();
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white justify-center mb-6">
          <img className="w-1/3" src={logo} alt="logo" />
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome to VietNam Registry
            </h1>
            <h6 className="italic text-center text-md mt-1 dark:text-white">
              Enter your new password
            </h6>
            {data ? (
              <Alert color="failure">
                <span>
                  <span className="font-medium">{data.message}</span>
                </span>
              </Alert>
            ) : (
              ""
            )}
            <Form className="space-y-4 md:space-y-6" method="post">
              <div>
                <label
                  htmlFor="newpassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New password
                </label>
                <input
                  type="password"
                  name="newpassword"
                  id="newpassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="cfpassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cfpassword"
                  id="cfpassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Reset
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <Link
                  to="/forgot-pass"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot Password
                </Link>
              </p> */}
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
