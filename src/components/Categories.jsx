import { useState } from "react";
import "../styles/navbar.css";
import { filterCategories } from "../../utilis";
import data from "../../data.json"

function Categories() {
  const [activeCategory, setActiveCategory] = useState(data.productRequests);

  const filterList = function(categorie) {
    const list = filterCategories(categorie);
    return setActiveCategory(list);
    
  }

  const categories = ["all", "ui", "ux", "enhancement", "feature", "bug"].map(
    (category, index) => (
      <li
        key={index}
        className={`${
          category === activeCategory[0].category ? "active" : ""
        } text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-lg text-[.9em] cursor-pointer capitalize`} 
        onClick={() => filterList(category)}
      >
        {category}
      </li>
    )
  );

  return (
    <div className="categories bg-white py-[1.1em] pl-[1.5em] rounded-xl md:h-[210px] md:w-[230px] lg:w-[100%] lg:h-[170px] lg:pr-3">
      <ul className="categories-container list-none flex flex-wrap gap-2 ">
        {categories}
      </ul>
    </div>
  );
}

export default Categories;