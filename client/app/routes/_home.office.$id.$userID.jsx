import { useMatches, useParams } from "@remix-run/react";
import StaffInfo from "../components/StaffInfo";

export default function StaffInfoPage() {
    const params = useParams();
    const matches = useMatches();
    console.log(matches);
    return <StaffInfo />;
}