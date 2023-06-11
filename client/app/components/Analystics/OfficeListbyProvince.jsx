import { Link, useLoaderData } from "@remix-run/react";

export default function OfficeByProvince() {
  const office = useLoaderData().office;
  return (
    <section className="text-gray-400 bg-gray-800 body-font rounded-lg">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-left w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
            Office In Province
          </h1>
        </div>
        <div className="flex flex-wrap -m-4  xl:divide-x xl:divide-white border-gray-700 border">
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
  );
}
