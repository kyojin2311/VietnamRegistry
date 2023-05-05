import { NavLink,Link } from "@remix-run/react";

export default function MainNavigation () {
    return (
        <nav className="sidebar">
        <header>
            <div className="image-text">
                <div className="text logo-text">
                    <span className="name">Codinglab</span>
                    <span className="profession">Web developer</span>
                </div>
            </div>
        </header>
        <div className="menu-bar">
            <div className="menu">
                <ul className="menu-links">
                    <li className="nav-link">
                        <NavLink to='analysis'>
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to='/'>
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">Revenue</span>
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to='/'>
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Notifications</span>
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to='/'>
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">Analytics</span>
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to='/'>
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">Likes</span>
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to='/'>
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Wallets</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bottom-content">
                <li className="">
                    <Link to='/'>
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </Link>
                </li>
            </div>
        </div>
    </nav>
    );
}
