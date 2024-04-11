import "../styles/navbar.css";
import "../index.css";
import menuIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import { useState } from "react";
import Categories from "./Categories";
import Roadmap from "./Roadmap";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const md = 767;

  {
    openMenu
      ? document.body.classList.add("openedMenu")
      : document.body.classList.remove("openedMenu");
  }

  function resizePage() {
    if (!openMenu || window.innerWidth >= md) {
      document.body.classList.remove("openedMenu");
    } else if (openMenu && window.innerWidth <= md) {
      document.body.classList.add("openedMenu");
    }
  }

  window.addEventListener("resize", resizePage);
  return (
    <div className="navbar-container md:flex md:gap-3 md:items-center md:max-w-[750px] md:m-auto md:pt-[5em] lg:flex-col lg:m-0 lg:gap-7">
      <div className="navbar-wrapper flex items-center justify-between md:w-[250px] md:h-[210px] md:rounded-xl md:items-end lg:h-[160px] lg:w-[220px]">
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

      <div className="widget-container hidden md:block">
        <Categories />
      </div>

      <div className="widget-container hidden md:block">
        <Roadmap />
      </div>
    </div>
  );
}

export default Navbar;
