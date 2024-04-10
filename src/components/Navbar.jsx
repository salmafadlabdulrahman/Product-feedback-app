import "../styles/navbar.css";
import "../index.css";
import menuIcon from "../assets/shared/mobile/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper flex items-center justify-between md:w-[280px] md:h-[210px] md:rounded-xl md:items-end">
        <nav className="navbar">
          <h3 className="text-lg font-bold tracking-[.5px] lg:text-xl">
            Frontend Mentor
          </h3>
          <p>Feedback board</p>
        </nav>
        <img src={menuIcon} alt="menu icon" className="block md:hidden" />
      </div>

      <div className="categories hidden lg:block">categories</div>
      <div className="roadmap hidden lg:block">roadmap</div>
    </div>
  );
}

export default Navbar;
