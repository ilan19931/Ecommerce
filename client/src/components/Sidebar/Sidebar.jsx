import React from "react";

import { useSelector } from "react-redux";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>Categories</div>

      <div className={styles.body}>
        <ul>
          {categories?.map((category) => (
            <li key={category._id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
