import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/images/home/logo.png";
import ActiveRoute from "../../../routes/ActiveRoutes/ActiveRoutes";
import Theme from "../../../components/Theme/Theme";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {});
    navigate("/");
  };

  const navOptions = (
    <>
      <li>
        <ActiveRoute to="/">Home</ActiveRoute>
      </li>

      <li>
        <ActiveRoute to="/classes">Classes</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/instructors">Instructors</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/dashboard/welcome">Dashboard</ActiveRoute>
      </li>
    </>
  );
  return (
    <div className=" bg-purple-900 rounded-b-xl">
      <div className="navbar text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow z-10 bg-base-100 rounded-box w-52 text-purple-400"
            >
              {navOptions}
            </ul>
          </div>
          <a className=" normal-case text-xl flex">
            <img src={logo} alt="" className="h-14 hidden lg:block" />
            <div className="flex flex-col items-center justify-center font-bold ml-2">
              <h2 className="text-sm">Summer</h2>{" "}
              <h2 className="text-red-400 text-sm lg:text-xl">Music Camp</h2>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-xl font-semibold">
            {navOptions}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-5">
            {user ? (
              <label
                tabIndex={0}
                className="btn-sm lg:btn btn-ghost btn-circle avatar placeholder"
              >
                <div className=" rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2 w-10">
                  <div>
                    <img src={user?.photoURL} title={user?.displayName} />
                  </div>
                </div>
              </label>
            ) : (
              ""
            )}
          </div>
          {user ? (
            <div>
              <button
                className="btn btn-error text-white mr-5"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button>
              <Link to="/login" className="btn btn-error text-white mr-5">
                Enroll Now
              </Link>
            </button>
          )}
        </div>
        <Theme handleToggle={handleToggle} theme={theme} />
      </div>
    </div>
  );
};

export default Header;
