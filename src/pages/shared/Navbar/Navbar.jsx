import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/user-profile">User Profile</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 sticky top-0 z-10 py-2 shadow-sm">
      <div className="navbar container mx-auto px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  gap-3"
            >
              {links}
              <li>
                <Link to={"/register"} className="btn btn-info">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost font-bold md:text-3xl text-2xl">
            LuxeDwell
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>
        <div className="navbar-end gap-3 mr-2">
          <Link to={"/register"} className="btn btn-info  md:flex hidden">
            Sign Up
          </Link>
          <Link to={"/login"} className="btn btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
