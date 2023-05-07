import { NavLink, Link, useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";
export default function MainNavigation() {
    const data = useLoaderData();
    const {name, role, workFor} = data.data.user;
    // console.log({name, role, workFor});

  return (
    <nav className="sidebar">
      <header>
        <Link to="/info">
          <div className="image-text">
            <div className="text logo-text">
              <span className="name">{name}</span>
              <span className="profession">{role === 'admin' && "Cục đăng kiểm"} {role !== 'admin' && workFor.name } </span>
            </div>
          </div>
        </Link>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <NavLink to="analysis">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/login">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Revenue</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/login">
                <i className="bx bx-bell icon"></i>
                <span className="text nav-text">Notifications</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/login">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Analytics</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/login">
                <i className="bx bx-heart icon"></i>
                <span className="text nav-text">Likes</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/login">
                <i className="bx bx-wallet icon"></i>
                <span className="text nav-text">Wallets</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="">
            <Form method="post" action="/logout">
              <button>
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </button>
            </Form>
          </li>
        </div>
      </div>
    </nav>
  );
}
