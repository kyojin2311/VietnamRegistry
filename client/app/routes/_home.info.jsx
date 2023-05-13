import {
  Link,
  useLoaderData,
  useMatches,
  useRouteLoaderData,
  Form,
} from "@remix-run/react";
export default function Infopage() {
  const matches = useMatches();
  // console.log(matches);
  const info = matches.find((match) => match.id === "routes/_home").data;
  // console.log(info);
  const { name, SSN, dateOfBirth, phone } = info.data;
  var date = new Date(dateOfBirth);

  var options = { month: "numeric", day: "numeric", year: "numeric" };
  var formattedDate = date.toLocaleDateString("en-GB", options);
  // console.log(formattedDate);
  // console.log(info.email);
  return (
    // <>
    //   <div>{name}</div>
    //   <div>{ssn}</div>
    //   <div>{dateOfBirth}</div>
    //   <Link to='/changepass'>thay doi pass</Link>
    // </>

    <Form>
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
            defaultValue={name}
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
            type="text"
            name="SSN"
            id="SSN"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
            defaultValue={SSN}
            readOnly
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
            defaultValue={dateOfBirth}
          />
        </div>
        <div>
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
            defaultValue={info.workFor.name}
            required
            readOnly
          />
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
            placeholder="flowbite.com"
            required
            defaultValue={phone}
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
            defaultValue={info.email}
            readOnly
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
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2" >
        Save
      </button>
      <Link to='/changepass'>
        <button className="text-white bg-pink-400 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Change Password
        </button>
      </Link>
    </Form>
  );
}

// // export async function loader(request) {
// //   // return await authenticator.isAuthenticated(request, {
// //   //   successRedirect: "/home",
// //   // });

// // }
// // export async function loader(request) {
// //   // const token = requireUserSession(request);
// //   // const response = await fetch('https://sleepy-coast-93816.herokuapp.com/api/v1/users/getMe',{
// //   // method: 'GET',
// //   // headers: {
// //   //   "content-type": "application/json",
// //   //   "Authorization": "Bearer" + token,
// //   // }
// // });
// const resData = await response.json();
// console.log(resData);
// return json(resData);
// }

// export async function action () {

// }
