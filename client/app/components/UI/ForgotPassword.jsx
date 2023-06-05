import { Link, Form } from "@remix-run/react";

export default function ForgotPass() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
      <Link
        to='/login'
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          className="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flowbite
      </Link>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
        <div className="w-full p-6 sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
            Forgot your password?
          </h2>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Don't afraid! Just type in your email and we will send you a code to
            reset your password!
          </p>
          <Form className="mt-8 space-y-6" method="post">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <button
              className="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset password
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
