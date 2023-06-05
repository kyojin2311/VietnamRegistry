import { Table } from "flowbite-react";
import { formatDate } from "../../util/formatDate";
import { useLoaderData, Link } from "@remix-run/react";
import PageModal from "../../util/PageModal";

export default function ExpiredTable() {
  const data = useLoaderData().data;
  return (
    <PageModal title="This is the list of car have already expired">
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
          {data.map((dt) => (
            <Table.Row
              key={dt.numberPlate}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {dt.numberPlate}
              </Table.Cell>
              <Table.Cell>{formatDate(dt.registDate)}</Table.Cell>
              <Table.Cell>{formatDate(dt.expiredDate)}</Table.Cell>
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
    </PageModal>
  );
}
