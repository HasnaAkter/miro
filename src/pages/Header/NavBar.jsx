import { Link } from "react-router-dom";
import logo from "../../assets/All-images/logo.png";
import world from "../../assets/All-images/world.png";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start flex items-center justify-between">
        <div className="lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
        </div>

        <Link to="/">
          <button className="btn btn-ghost text-xl px-4 md:px-10">
            <img src={logo} alt="Logo" />
          </button>
        </Link>

        <div className="lg:flex hidden">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <details>
                <summary>Product</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Enterprise</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className="hidden md:flex items-center space-x-4">
          <img src={world} alt="" className="h-4 w-4" />
          <Link to="">
            <button className=" hover:bg-gray-100 duration-300 p-2">
              EN
            </button>
          </Link> 
          <Link to="">
            <button className=" hover:bg-gray-100 duration-300 p-2">
              Contact Sales
            </button>
          </Link>
          <Link to="">
            <button className=" hover:bg-gray-100 duration-300 p-2">
              Login
            </button>
          </Link>

          <Link to="/">
            <button className="rounded-full px-4 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
              Sign up free →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
