import { redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
export default function OfficeDetailPage() {
  const data = useLoaderData();

  return (
    <div style={{ position: "static", height: "80vh", width: "60vw" }}>
      <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "data2",
              data: [5, 1, 7],
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
              id: 2,
              label: "data2",
              data: [3, 6, 1],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
    </div>
  );
}

export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" + params.id,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataPass = {
    time: "month",
    unit: "1",
  };
  const url =
    "https://registrytotal.herokuapp.com/api/office/" + params.id + "/car";
  console.log(url);

  const data = await response.json();
  console.log(data);
  const response_2 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass),
  });
  console.log(await response_2.json());

  return data;
}
