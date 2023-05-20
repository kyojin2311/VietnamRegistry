import OwnInfo from "../components/OwnInfo";

export default function Infopage() {
  return (
    <OwnInfo />
  );
}

export function meta({matches}) {
  return [
    {title: `${matches[1].data.data.name}`}
  ]
}
