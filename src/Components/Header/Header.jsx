import React from 'react'
import styles from "./styles.module.scss"
const Header = () => {
  return (
    <div className={styles.component_wrapper}>
        <header className="grid_wrapper">
            <ul className={styles.header_list}>
                <li className={styles.address_btn}>
                    <a href="#" className={styles.address_link}>Бишкек, Медерова 117</a>
                </li>
                <nav className={styles.header_nav}>
                    <li className={styles.nav_item}>
                        <a href="#" className={styles.nav_link}>
                        О компании
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#" className={styles.nav_link}>
                        Магазины
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#" className={styles.nav_link}>
                        Решения
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="#" className={styles.nav_link}>
                        Контакты
                        </a>
                    </li>
                    
                </nav>
                <li>
                    <a href="tel:">
                    +996 (999) 117 227
                    </a>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header