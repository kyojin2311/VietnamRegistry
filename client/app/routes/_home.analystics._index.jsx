import { useMatches } from "@remix-run/react"

export default function AnalysticsPage () {
    const matches = useMatches();
    console.log(matches);
    return <div>chưa có j cả mao phắc</div>
}
export async function loader() {
    
}
