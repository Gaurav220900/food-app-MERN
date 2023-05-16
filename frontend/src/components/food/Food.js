import React from "react";
import styles from "./Food.module.css";

const Food = ({ id, name, price, image, desc }) => {
  return (
    <li className={styles.food}>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>Rs .{price}</h4>
        <h4>{desc}</h4>
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" min="1" defaultValue={1} />
        <button className={styles["add-btn"]}>+ Add to Cart</button>
      </div>
    </li>
  );
};

export default Food;
