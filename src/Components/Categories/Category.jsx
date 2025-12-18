
import React from 'react'
import CategoryCard from './CategoryCard';
import Data from './CategoryData';
import styles from './category.module.css';
const Category = () => {
  return (
    <section className={`${styles.card_container}`}>
      {Data.map((infos) => {
      return <CategoryCard key={infos.id} information={infos} renderAdd={false}/>;
      })}
    </section>
  );
}

export default Category
