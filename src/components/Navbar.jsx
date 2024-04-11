import "../styles/navbar.css";
import "../index.css";
import menuIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import { useState } from "react";
import Categories from "./Categories";
import Roadmap from "./Roadmap";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const sm = "700px";
  
  {
    openMenu
      ? document.body.classList.add("openedMenu")
      : document.body.classList.remove("openedMenu");
  }
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper flex items-center justify-between md:w-[280px] md:h-[210px] md:rounded-xl md:items-end">
        <nav className="navbar">
          <h3 className="text-lg font-bold tracking-[.5px] lg:text-xl">
            Frontend Mentor
          </h3>
          <p>Feedback board</p>
        </nav>

        {openMenu ? (
          <img
            src={closeIcon}
            className="close-icon md:hidden lg:hidden"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <img
            src={menuIcon}
            alt="menu icon"
            className="block md:hidden lg:hidden"
            onClick={() => setOpenMenu(true)}
          />
        )}
      </div>

      {/*Mobile size navbar */}
      {openMenu ? (
        <div className="nav-menu md:hidden">
          <div className="categories-wrapper mt-3">
            <Categories />
          </div>

          <div className="roadmap-wrapper">
            <Roadmap />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="widgets-container hidden md:block">
        <Categories />
        <Roadmap />
      </div>
    </div>
  );
}

export default Navbar;
