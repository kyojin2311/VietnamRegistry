import { destroyUserSession } from "../services/auth.server"; 
import { json } from "@remix-run/node";
export async function action (request) {
    console.log(request);
    if (request.method !== 'POST') {
        throw json({ message: 'Invalid request method' }, { status: 400 });
      }
    
      return destroyUserSession(request); 
    
}