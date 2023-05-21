import {
  getUserFromSession,
  createUserSession,
  requireUserSession,
} from "./auth.server";
import { redirect, json } from "@remix-run/node";
//Login with api
export async function login(email, password) {
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/login",
    {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    }
  );
  if (response.ok === false)
    throw new Error("Invalid Credentials, please try again");
  else {
    const user = await response.json();
    return createUserSession(user.session, "/main");
  }
}

//Get allOffice api
export async function getAllOffice(request) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const data = await fetch("https://registrytotal.herokuapp.com/api/office", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
  const resData = await data.json();
  if (resData === "NOT FOUND") {
    throw new Error("You must be admin to access this page");
  } else {
    return resData;
  }
}
//Admin addStaff Function
export async function addStaff(request, data) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/addStaff",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const resData = await response.json();
  if (resData !== "SUCCEEDED") {
    return json({ message: resData });
  }

  return redirect("/main");
}

//Get Inspections by ID
export async function getInspections(params, request) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const url = "https://registrytotal.herokuapp.com/api/inspection/" + params.id;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();
  return resData;
}
//Get own user Info
export async function getOwnInfo(request) {
  const response = await requireUserSession(request);
  if (!response) return redirect("/login");
  const data = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/own",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${response}`,
        "content-type": "application/json",
      },
    }
  );
  const resData = await data.json();
  console.log(resData);
  return resData;
}

export async function EditInfo(request, data) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const Fetchdata = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/change",
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const resData = await Fetchdata.json();
  return resData;
}

export async function getStaffbyId(request, staffID) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");

  const data = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/" + staffID,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const resData = await data.json();
  if (resData === "NOT FOUND") {
    throw new Error("You must be admin to access this page");
  } else {
    return resData;
  }
}

export async function addOffice(request, data) {
  const token = await requireUserSession(request);
  if(!token) return redirect('/login');
  const response = await fetch('https://registrytotal.herokuapp.com/api/office/add', {
    method: 'POST',
    headers: {
      'content-type': 'application/json', 
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  const resData = await response.json();
  if(resData === "NOT FOUND") {
    throw new Error("You must be admin to access this");
  } else if( resData === "SERVER UNAVAILABLE") {
    throw new Error("Something went wrong with the server, please try again")
  } else return redirect('/office');
}