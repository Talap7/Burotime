import React from 'react'
import styles from "./styles.module.scss"
import logo from "../../icons/logo.svg"
import instagram from "../../icons/instagram.svg"
import facebook from "../../icons/facebook.svg"

const SecondHeader = () => {
  return (
    <div className={styles.wrapper}>
        <div className='grid_wrapper'>
            <div className={styles.content_block}>
                <nav className={styles.list_wrapper}>
                        <span></span>
                        <li className={styles.list__item}>
                        Каталог
                        </li>
                        <li className={styles.list__item}>
                        Новинки
                        </li>
                        <li className={styles.list__item}>
                        Хит продаж
                       </li>
                </nav>
                <div>
                <img src={logo} alt="logo" />

                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <input className={styles.search_input} type="text" placeholder='поиск' />
                    <div style={{marginRight:"10px"}}>
                    <a href="#">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="#">
                    <img src={facebook} alt="facebook" />
                          
                    </a>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondHeader