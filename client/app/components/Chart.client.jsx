import Chart from "react-apexcharts";

export default function ChartCom(props) {
  return (
    <Chart options={props.data.options} series={props.data.series} type="bar" />
  );
}
