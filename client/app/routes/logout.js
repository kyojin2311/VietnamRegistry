import { destroyUserSession } from "../services/auth.server"; 
export async function loader ({request}) {
    return await destroyUserSession(request);
}