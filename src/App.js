import "./App.css";
import Wish from "./Wish";
import { useState } from "react";

function App() {
  const [wishes, setWishes] = useState([]);
  const [awish, setAwish] = useState("");
  const [wishCounter, setWishCounter] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    if (awish.trim() === "") {
      alert("Enter The Wish Please");
      return;
    }

    if (wishes.find((wish) => wish.content === awish)) {
      alert("Wish is already present");
    } else {
      setWishes([...wishes, { content: awish, key: wishCounter }]);
      setWishCounter(wishCounter + 1);
    }
    setAwish("");
  };

  const handleDelete = (key) => {
    const updatedWishes = wishes.filter((wish) => wish.key !== key);
    setWishes(updatedWishes);
  };

  const handleDeleteAll = () => {
    setWishes([]);
  };

  return (
    <>
      <div className="main">
        <div className="inputbox">
          <form onSubmit={handleClick}>
            <label className="label">WishList: </label>
            <input
              type="text"
              id="inp"
              value={awish}
              autoComplete="off"
              required
              onChange={(t) => setAwish(t.target.value)}
            />
            <button className="update" type="submit">
              Update
            </button>
            <div className="deleteAll" onClick={handleDeleteAll}>
              Delete All
            </div>
          </form>
        </div>
        <div className="heading">WISHLIST</div>
        {wishes.map((wish) => (
          <Wish
            key={wish.key}
            content={wish.content}
            onDelete={() => handleDelete(wish.key)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
