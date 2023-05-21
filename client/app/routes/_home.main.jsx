import { getOwnInfo } from "../services/APIAction.server";

export const meta = () => {
    return [{ title: "VietNam Registry" }];
  };

export default function MainPage () {
    return <div>This after login</div>
}

// export async function loader ({request}) {
//   const data = await getOwnInfo(request);
  
// }