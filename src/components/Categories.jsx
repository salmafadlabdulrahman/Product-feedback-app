function Categories() {
  const categories = ["All", "UI", "UX", "Enhancement", "Feature", "Bug"].map(
    (categorie, index) => (
      <li
        key={index}
        className="text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-lg text-[.9em]"
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
