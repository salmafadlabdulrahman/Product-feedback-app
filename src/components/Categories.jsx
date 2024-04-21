import { useContext, useEffect } from "react";
import "../styles/navbar.css";
import { filterCategories } from "../../utilis";
import { MyContext } from "../MyContext";

function Categories() {
  const {
    currentCategorie,
    setCurrentCategorie,
    currentRequest,
    setCurrentRequest,
  } = useContext(MyContext);

  const filterList = function (category) {
    setCurrentRequest((prevState) => ({
      ...prevState,
      category: category,
    }));

    setCurrentCategorie(() => filterCategories(category));
  };

  useEffect(() => {
    localStorage.setItem("currentRequest", JSON.stringify(currentRequest));
    localStorage.setItem("comments", JSON.stringify(currentCategorie));
  }, [currentRequest, currentCategorie]);

  const categories = ["all", "ui", "ux", "enhancement", "feature", "bug"].map(
    (category, index) => (
      <li
        key={index}
        className={`${
          category === currentRequest.category ? "active" : ""
        } text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-lg text-[.9em] cursor-pointer`}
        style={{
          textTransform: category.length === 2 ? "uppercase" : "capitalize",
        }}
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
