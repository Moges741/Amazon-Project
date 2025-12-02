import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import styles from './lowerHeader.module.css'
const LowerHeader = () => {
  return (
    <>
      <ul className={styles.lower_header}>
        <li>
          <MenuIcon/>
          All</li>
        <li>Today's Deal</li>
        <li>Costumer Center</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </>
  )
}

export default LowerHeader;
