import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/categories/categoriesActions";

const CategoriesList = ({ match }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const catList = categories[match.params.transType];

  const {
    params: { transType },
  } = match;

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({ input, transType }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Input category..."
        />
        <button type="submit">Add Cat</button>
      </form>
      <ul>
        {catList.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesList;
