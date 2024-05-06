import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";
import { toast } from "react-toastify";
import { scrollToTop } from "./../../../utility/scrollToTop";

const Navbar = () => {
  const { user, logOutUser, loading } = useContext(UserContext);

  const handelLogOutUser = () => {
    logOutUser()
      .then((res) => {
        toast.success(`Log Out success`, {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/saved-properties">Saved Properties</NavLink>
          </li>
          {/* <li>
            <NavLink to="/update-profile">Update Profile</NavLink>
          </li> */}
        </>
      )}
    </>
  );

  return (
    <nav className="bg-base-100 sticky top-0 z-50 py-1 shadow-sm">
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
              className="text-base  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  gap-3"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="
          btn btn-ghost font-bold md:text-3xl text-2xl
          bg-gradient-to-r from-green-600 to-indigo-300  text-transparent bg-clip-text
          "
          >
            GreenVilla
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-base menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>
        <div className="navbar-end gap-3 mr-2">
          {loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <>
              {user ? (
                <div className="dropdown dropdown-hover dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        title={user?.displayName}
                        src={user?.photoURL}
                        alt="User"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link
                        onClick={scrollToTop}
                        to={"/user-profile"}
                        className="justify-between"
                      >
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/update-profile"}>Update Profile</Link>
                    </li>
                    <li>
                      <button onClick={handelLogOutUser}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="btn hover:bg-black  bg-[#093B59] text-white"
                >
                  Sign In
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
