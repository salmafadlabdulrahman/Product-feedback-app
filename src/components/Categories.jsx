import { useState } from "react";
import "../styles/navbar.css";

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = ["All", "UI", "UX", "Enhancement", "Feature", "Bug"].map(
    (categorie, index) => (
      <li
        key={index}
        className={`${activeCategory === index ? "active" : ""} text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-lg text-[.9em]`}
        onClick={() => setActiveCategory(index)}
      >
        {categorie}
      </li>
    )
  );

  return (
    <div className="categories bg-white py-[1.1em] pl-[1.5em] rounded-xl">
      <ul className="categories-container list-none flex flex-wrap gap-2 ">
        {categories}
      </ul>
    </div>
  );
}

export default Categories;
