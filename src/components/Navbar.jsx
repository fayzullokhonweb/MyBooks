import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { LuSun } from "react-icons/lu";
import { HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
// context
import { GlobalContext } from "../context/globalContext";

function Navbar() {
  const { dispatch, user } = useContext(GlobalContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "winter"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else setTheme("winter");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const locaTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", locaTheme);
  }, [theme]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-md hover:shadow-2xl py-1 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <Link to="/" className="text-3xl  font-medium font-mono ">
              MyBooks
            </Link>
          </div>
          <div className="navbar-center mr-36 gap-5">
            <Link to="/" className="text-lg hover:opacity-50">
              Home
            </Link>
            <Link to="/about" className="text-lg hover:opacity-50">
              About
            </Link>
            <Link to="/books" className="text-lg hover:opacity-55">
              Books
            </Link>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <label
              className="swap swap-rotate  -mr-1
            -mb-1.5"
            >
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "winter" ? false : true}
              />

              {/* sun icon */}
              <LuSun className="swap-on fill-current w-6 h-6" />

              {/* moon icon */}
              <HiMoon className="swap-off fill-current w-6 h-6" />
            </label>

            <div>{user && <p className="-mb-1">{user.displayName}</p>}</div>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>

            <div className="">
              <button
                onClick={handleLogout}
                className=" font-sans hover:opacity-60"
              >
                <span className="flex items-center gap-1 ">
                  <span className="text-xl ">Logout</span>
                  <IoArrowForwardOutline className="-mb-1.5 text-lg" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
