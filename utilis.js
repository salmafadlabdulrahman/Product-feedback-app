import data from "./data.json";

export const filterCategories = function (currCategory) {
  const list = data.productRequests.filter(
    (item) => item.category === currCategory
  );
  return list;
};
