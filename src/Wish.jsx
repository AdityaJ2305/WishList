import React from "react";
import './Wish.css'

const Wish = ({ content, onDelete,key}) => {
  return (
    <div className="wish-block" key={key}>
      <p className="wish">{content}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Wish;


