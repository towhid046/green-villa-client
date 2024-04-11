import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../providers/ContextProvider/ContextProvider";
import { toast } from "react-toastify";

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
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/update-profile">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="/update-profile">Saved Properties</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-base-100 sticky top-0 z-10 py-1 shadow-sm">
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
              <li>
                <Link to={"/register"} className="btn btn-info">
                  Sign Up
                </Link>
              </li>
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
                <>
                  <span
                    title={user?.displayName}
                    className="text-3xl cursor-pointer"
                  >
                    {
                      <Link to={"/user-profile"}>
                        <img
                          className="md:w-10 w-8 rounded-full"
                          src={user?.photoURL}
                          alt="User"
                        />
                      </Link>
                    }
                  </span>
                  <button
                    onClick={handelLogOutUser}
                    className="btn md:btn md:text-white text-white md:bg-[#093B59] bg-[#093B59] md:hover:bg-black hover:bg-black btn-sm"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={"/register"}
                    className="btn  hover:bg-green-300  hover:text-white bg-green-300  md:flex hidden"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={"/login"}
                    className="btn hover:bg-black  bg-[#093B59] text-white"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
