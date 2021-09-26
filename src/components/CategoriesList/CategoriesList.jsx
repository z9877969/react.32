import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCostsCat,
  addIncomesCat,
} from "../../redux/categories/actionsCategories";

const CategoriesList = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [categoryName, setCategoryName] = useState("");
  const { transType } = params;
  const catList = categories[transType + "Cat"];

  const handleSubmit = (e) => {
    e.preventDefault();
    transType === "costs" && dispatch(addCostsCat(categoryName));
    transType === "incomes" && dispatch(addIncomesCat(categoryName));
    setCategoryName("");
  };

  return (
    <>
      <h1>Категории</h1>
      <ul>
        {catList.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Input category"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default CategoriesList;
