import { Form, useLoaderData, useActionData } from "@remix-run/react";

export default function AddForm() {
  const data = useLoaderData();
  const option = data.data.map((dt) => <option key={dt._id}>{dt.name}</option>);
  const error = useActionData();
  return (
    <>
      {error && <h3 className="text-red-500 text-md bold text-center mb-5">{error.message}, please try again</h3>}
      <Form method="post">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              required
              defaultValue=""
            />
          </div>
          <div>
            <label
              htmlFor="SSN"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Social Security Number
            </label>
            <input
              type="number"
              name="SSN"
              id="SSN"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Social Security Number"
              required
              defaultValue=""
            />
          </div>
          <div>
            <label
              htmlFor="dob"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="dd/mm/yyyy"
              required
              defaultValue=""
            />
          </div>
          {/* <div>
        <label
          htmlFor="work"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Works
        </label>
        <input
          type="text"
          id="work"
          name="work"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          defaultValue=''
          required
        />
      </div> */}
          <div>
            <label
              htmlFor="workFor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Works
            </label>
            <select
              name="workFor"
              id="workFor"
              className="block py-2.5 px-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder="Trung tâm đăng kiểm"
            >
              {/* <option value="HN">Trung tâm đăng kiểm Hà nội số 1</option>
            <option value="HN">Trung tâm đăng kiểm Thanh Hóa sô 1</option>
            <option value="HN">Trung tâm đăng kiểm Nghệ An sô 1</option>
            <option value="HN">Trung tâm đăng kiểm Hải Phòng sô 1</option>
            <option value="HN">Trung tâm đăng kiểm Ninh Bình sô 1</option> */}
              {option}
            </select>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="10 numbers"
              required
              defaultValue=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com"
              defaultValue=""
              required
            />
          </div>
        </div>
        {/* <div className="mb-6">
      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
  </div>  */}
        {/* <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
      </div>
      <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
  </div> */}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          ADD
        </button>
      </Form>
    </>
  );
}
