import DOMPurify from "dompurify";
import Login from "../components/Login";
import styles from "../styles/LoginBox.css";
export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return <Login />
}

export async function action ({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const sendData = {
    email: DOMPurify.sanitize(data.email),
    password: DOMPurify.sanitize(data.password)
  }
  const response = await fetch()
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}
