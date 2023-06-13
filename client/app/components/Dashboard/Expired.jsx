import { Table } from "flowbite-react";
import { formatDate } from "../../util/formatDate";
import { useLoaderData, Link } from "@remix-run/react";
import PageModal from "../../util/PageModal";
import Spinner from "../../util/Loading";

import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils";
export default function ExpiredTable() {
  const data = useLoaderData().data;
  const inspection = data.sort(function (a, b) {
    return new Date(a.registDate) - new Date(b.registDate);
  });
  const [filterList, setFilterList] = useState(inspection);
  const [searchInput, setSearchInput] = useState("");
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      setSearchInput(e.target.value);
    }
  };
  useEffect(() => {
    var filteredList = inspection.filter(
      (dt) => dt.numberPlate.search(searchInput) === 0
    );
    setFilterList(filteredList);
  }, [searchInput]);

  return (
    <PageModal title="This is the list of car have already expired">
      <div className="pb-4 bg-white dark:bg-gray-700">
        <label for="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            onKeyDown={searchHandler}
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for NumberPlate"
          />
        </div>
      </div>
      <ClientOnly fallback={<Spinner />}>
        {() => (
          <Table hoverable className="overflow-y-auto">
            <Table.Head>
              <Table.HeadCell>NumberPlate</Table.HeadCell>
              <Table.HeadCell>RegistDate</Table.HeadCell>
              <Table.HeadCell>ExpiredDate</Table.HeadCell>
              <Table.HeadCell>City</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">View</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {filterList.map((dt) => (
                <Table.Row
                  key={dt.numberPlate}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {dt.numberPlate}
                  </Table.Cell>
                  <Table.Cell>{formatDate(dt.registDate)}</Table.Cell>
                  <Table.Cell className="dark:text-red-400">{formatDate(dt.expiredDate)}</Table.Cell>
                  <Table.Cell>{dt.city}</Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      to={`/car/${dt.numberPlate}`}
                    >
                      <p>View</p>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </ClientOnly>
    </PageModal>
  );
}
