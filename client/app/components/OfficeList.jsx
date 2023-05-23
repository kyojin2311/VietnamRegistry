import { Link, useLoaderData } from "@remix-run/react";

export default function OfficeList() {
  const data = useLoaderData();
  //   console.log(data);
  let content = data.data.map((dt) => (
    <tr
      key={dt._id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
    >
      <Link to={dt._id}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {dt.name}
        </th>
      </Link>
    </tr>
  ));
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Office Name
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
