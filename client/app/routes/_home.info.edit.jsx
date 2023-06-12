import { useMatches, Form } from "@remix-run/react";
import { EditInfo } from "../services/APIAction.server";
import { formatDate, reFormatDate } from "../util/formatDate";

export default function InfoEditpage() {
  const matches = useMatches();
  const info = matches.find((match) => match.id === "routes/_home").data;
  const { name, SSN, dateOfBirth, phone } = info.data;
  // var date = new Date(dateOfBirth);
  // const year = date.getFullYear();
  // const month = ("0" + (date.getMonth() + 1)).slice(-2);
  // const day = ("0" + date.getDate()).slice(-2);
  // const formattedDate = `${year}-${month}-${day}`;
  return (
    <Form className="dark">
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
            Date Of Birth(dd/mm/yyyy)
          </label>
          <input
            type="text"
            name="dob"
            id="dob"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="dd/mm/yyyy"
            required
            defaultValue={formatDate(dateOfBirth)}
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
            type="text"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <button
        formMethod="put"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2"
      >
        Save
      </button>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
    dob: reFormatDate(formData.get("dob")),
    ssn: formData.get("SSN"),
    phone: formData.get("phone"),
  };
  return await EditInfo(request, data);
}
