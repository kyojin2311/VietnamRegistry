import { Link, useLoaderData } from "@remix-run/react";

export default function OfficeByProvince() {
  const office = useLoaderData().office;
  return (
    <section className="text-gray-400 bg-gray-800 body-font rounded-lg shadow-sm">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-left w-full">
          <h1 className="text-2xl font-medium title-font mb-10 text-white tracking-widest">
            Office In Province
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {office.map((a) => (
            <Link key={a._id} className="p-4 lg:w-1/2" to={`/office/${a._id}`}>
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">
                    {a.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{a.address}</h3>
                  <div className="mb-4">Hotmail: {a.hotMail}</div>
                  <div className="mb-4">Hotline: {a.hotline}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    // <div className="p-4 mb-4 bg-white border boder-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0">
    /* <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          List of centres
        </h3>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {office &&
          office.map((a) => (
            <li className="mb-10 ml-4" key={a._id}>
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">
                    {a.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{a.address}</h3>
                  <div className="mb-4 text-gray-500">Hotmail: {a.hotMail}</div>
                  <div className="mb-4  text-gray-500">
                    Hotline: {a.hotline}
                  </div>
                </div>
              </div>
              <Link
                to={`/office/${a._id}`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                See more:
                <svg
                  className="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
          ))}
        {!office && <div className="dark:text-white"> There are no office</div>}
      </ol> */

    // </div>
  );
}
