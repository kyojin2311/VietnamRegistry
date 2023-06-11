import { Link, useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
export default function OfficeList() {
  const data = useLoaderData().data;
  const office = data.sort(function (a, b) {
    return b.name - a.name;
  });
  const [filterList, setFilterList] = useState(office);
  const [searchInput, setSearchInput] = useState("");
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      setSearchInput(e.target.value);
    }
  };
  useEffect(() => {
    var filteredList = office.filter(
      (dt) => dt.name.indexOf(searchInput) !== -1
    );
    setFilterList(filteredList);
  }, [searchInput]);

  let content = filterList.map((dt) => (
    <tr
      key={dt._id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Link to={dt._id}>{dt.name} </Link>
      </th>
    </tr>
  ));
  return (
    <>
      <h2 className="dark:text-white mt-5 text-xl font-semibold">All Office</h2>
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
                placeholder="Search for office"
                onKeyDown={searchHandler}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
          <Link
            to="/office/add"
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
            Add Office
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto">
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
    </>
  );
}
