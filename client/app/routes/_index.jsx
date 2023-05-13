
import { Link } from "@remix-run/react";
import { requireUserSession } from "../services/auth.server";
import { redirect } from "@remix-run/node";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return <Link to='login'>login pls</Link>;
}

export async function loader({request}) {
  const response = await requireUserSession(request); 
  //Navigate to the login if no token and to main if token existed
  if(!response) return redirect('/login');
  else return redirect('/main');
}