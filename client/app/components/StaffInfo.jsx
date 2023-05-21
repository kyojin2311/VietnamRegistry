import { Link, useLoaderData, useMatches } from "@remix-run/react";
import link from "../images/ava.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../util/formatDate";
export default function StaffInfo() {
  const info = useLoaderData();
  const { name, SSN, dateOfBirth, phone } = info.data;
  const formattedDate = formatDate(dateOfBirth);
  const inspection = info.registed;
  return (
    <div className=" m-auto">
      <section className="mx-0 dark:text-white">
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
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p className="text-lg font-light text-black-500">
                      {/* Nhân viên tại: {info.data.workFor.name} */}
                      Nhân viên tại: Đâu đó
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-24 text-md font-light dark:text-green-300">
                <Link to="edit" className="flex flex-wrap">
                  <span className="mb-5 text-lg font-bold ">
                    Thông tin cá nhân
                  </span>
                  <span className="ms-3">
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
      <section className="ms-5 mt-10 ">
        <h3 className="text-lg font-semibold dark:text-green-300">
          Inspections
        </h3>

        {/* <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {inspection.map((inspec) => (
            <li key= {inspec._id} className="mb-10 ml-4">
              <Link to={`/Inspections/${inspec._id}`}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {formatDate(inspec.regisDate)}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mã số Đăng kiểm: {inspec._id}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Biển số xe: {inspec.car.numberPlate}
                </p>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Tại: {info.data.workFor.name}
                </p>
              </Link>
            </li>
          ))}
        </ol> */}
      </section>
    </div>
  );
}
