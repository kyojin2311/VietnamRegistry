import { redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server"

export default function OfficeDetailPage() {
    return <div>This is detaile Page</div>
}

export async function loader({request, params}) {
    const token = await requireUserSession(request);
    console.log(token);
    if(!token) return redirect('/login');
    console.log(params.id);
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