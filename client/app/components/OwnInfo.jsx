import { Link, useLoaderData, useMatches } from "@remix-run/react";
import link from "../images/ava.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function OwnInfo() {
  const matches = useMatches();
  const info = matches.find((match) => match.id === "routes/_home").data;
  const { name, SSN, dateOfBirth, phone } = info.data;
  var date = new Date(dateOfBirth);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = `${day}-${month}-${year}`;
  return (
    <>
      <section className="mx-0">
        <div className="max-w-7xl lg:pt-5 items-stretch">
          <div className="mx-5 max-w-xl">
            <div>
              <div className="md:flex md:items-center md:justify-between md:space-x-5">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        className="h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10"
                        src={link}
                        alt="image"
                      />
                      <span
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <p className="text-md font-light text-black-500">
                      Nhân viên tại: {info.workFor.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-24 text-md font-light">
                <Link to="edit" className="flex flex-wrap">
                  <span className="mb-5 text-lg font-bold ">
                    Thông tin cá nhân
                  </span><span className="ms-3">
                      <FontAwesomeIcon icon={faPencil} />
                    </span>
                </Link>
                <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Email address
                    </dt>
                    <dd className="text-lg font-semibold">{info.email}</dd>
                  </div>

                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Social Security Number
                    </dt>
                    <dd className="text-lg font-semibold">{SSN}</dd>
                  </div>
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Date of Birth
                    </dt>
                    <dd className="text-lg font-semibold">{formattedDate}</dd>
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Phone number
                    </dt>
                    <dd className="text-lg font-semibold">{phone}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ms-5 mt-10">
        <h3 className="text-lg font-semibold">Inspections</h3>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <Link>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              {/* <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more
              <svg
                class="w-3 h-3 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a> */}
            </Link>
          </li>
        </ol>
      </section>
    </>
  );
}
