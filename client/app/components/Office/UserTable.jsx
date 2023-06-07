import { Link, useLoaderData } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
export default function ListOfStaff() {
  const data = useLoaderData().staff;
  const list = data.staff.sort((a, b) => {
    return a.email > b.email;
  });
  const TableRef = useRef();
  const [filterList, setFilterList] = useState(list);
  const [searchInput, setSearchInput] = useState("");
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      setSearchInput(e.target.value);
    }
  };
  useEffect(() => {
    var filteredList = list.filter(
      (dt) => dt.data.name.indexOf(searchInput) !== -1
    );
    setFilterList(filteredList);
  }, [searchInput]);
  const handlePrint = useReactToPrint({
    content: () => TableRef.current,
  });
  const pageStyle = `"
  @page {
    size: A4 landscape;
  }
"`;
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="items-center justify-between lg:flex">
        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          All staff
        </h2>
        <div className="sm:flex mb-4">
          <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
            <div className="lg:pr-3">
              <label htmlFor="users-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-64 xl:w-96">
                <input
                  type="text"
                  name="email"
                  id="users-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search for users"
                  onKeyDown={searchHandler}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
            <Link
              to="addStaff"
              className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Add user
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Export
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
        ref={TableRef}
      >
        <style>{pageStyle}</style>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Staff name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                SSN
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filterList.map((dt) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={dt._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {dt.data.name}
                </th>
                <td className="px-6 py-4">{dt.email}</td>
                <td className="px-6 py-4">{dt.data.SSN}</td>
                <td className="px-6 py-4">{dt.data.phone}</td>
                <td className="px-6 py-4">
                  <Link
                    to={dt._id}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
