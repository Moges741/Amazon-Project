
import React from 'react'
import CategoryCard from './CategoryCard';
import Data from './CategoryData';
import styles from './category.module.css'
const Category = () => {
  return (
    <section className={styles.card_container}>
      {Data.map((infos) => {
       return <CategoryCard information={infos} />;
      })}
    </section>
  );
}

export default Category
