import { destroyUserSession } from "../services/auth.server"; 
import { json, redirect } from "@remix-run/node"; 
export async function loader ({request}) {
    console.log(request);
    return await destroyUserSession(request);

}