import React from 'react'
import styles from './category.module.css'

const CategoryCard = ({ information }) => {
  return (
    <section className={`${styles.category}` }>
      <a href="">
        <span>
          <h2>{information.title}</h2>
        </span>
        <img src={information.imgLink} alt="image " />
        <p>shop now</p>
      </a>
    </section>
  );
};

export default CategoryCard;
