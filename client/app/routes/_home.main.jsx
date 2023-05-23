import { getOwnInfo } from "../services/APIAction.server";
import link from "../images/light.jpg";
export const meta = () => {
  return [{ title: "VietNam Registry" }];
};

export default function MainPage() {
  return (
    <div className="dark: text-white">
      This after login
      <img src={link} />
    </div>
  );
}

// export async function loader ({request}) {
//   const data = await getOwnInfo(request);

// }
