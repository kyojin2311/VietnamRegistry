import { Link, useLoaderData, useMatches, useRouteLoaderData } from "@remix-run/react";
export default function Infopage() {
  const matches = useMatches();
  console.log(matches);
  const info = matches.find(match => match.id === 'routes/_home').data.data;
  console.log(info);
  const { name, ssn, dateOfBirth } = info.user;
  return (
    <>
      <div>{name}</div>
      <div>{ssn}</div>
      <div>{dateOfBirth}</div>
      <Link to='/changepass'>thay doi pass</Link>
    </>
  );
}

// // export async function loader(request) {
// //   // return await authenticator.isAuthenticated(request, {
// //   //   successRedirect: "/home",
// //   // });

// // }
// // export async function loader(request) {
// //   // const token = requireUserSession(request);
// //   // const response = await fetch('https://sleepy-coast-93816.herokuapp.com/api/v1/users/getMe',{
// //   // method: 'GET',
// //   // headers: {
// //   //   "content-type": "application/json",
// //   //   "Authorization": "Bearer" + token,
// //   // }
// // });
// const resData = await response.json();
// console.log(resData);
// return json(resData);
// }
