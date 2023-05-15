import { redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server"
import { useLoaderData } from "@remix-run/react";
export default function OfficeDetailPage() {
    const data = useLoaderData(); 
    return <div>This is office info page</div>
}

export async function loader({request, params}) {
    const token = await requireUserSession(request);
    if(!token) return redirect('/login');
    // console.log(params.id);
    const response = await fetch ('https://registrytotal.herokuapp.com/api/office/' + params.id, {
        method: 'GET', 
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
    const data = await response.json();
    console.log(data);
    return data;
}