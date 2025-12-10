import React from 'react'
import styles from './category.module.css'
import {Link} from 'react-router-dom'

const CategoryCard = ({ information }) => {
  console.log(information)
  return (
    <section className={`${styles.category}` }>
      <Link to={`/category/${information.name}`}>
        <span>
          <h2>{information?.title}</h2>
        </span>
        <img src={information?.imgLink} alt="image " />
        <p>shop now</p>
      </Link>
    </section>
  );
};

export default CategoryCard;
