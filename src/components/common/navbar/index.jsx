import { Link } from "react-router-dom";
import navigationItems from "../../../utils/navItems";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="2xl:px-44 xl:px-36 lg:px-28 md:px-20 xs:px-12 w-screen flex justify-between items-center py-6">
      <h1 className="font-bold text-3xl">Logo</h1>

      <div className={`md:static absolute duration-500 ease-in-out bg-[#f5f5f5] md:min-h-fit min-h-[40vh] w-full md:w-auto top-[9%] flex items-center justify-center px-5 ${isOpen? "left-0" : "left-[-100%]"}`}>
        <ul className="font-medium flex md:gap-4 gap-8 md:flex-row flex-col items-center">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={toggleMenu} className="md:hidden">
        <i className={`fas ${isOpen? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;