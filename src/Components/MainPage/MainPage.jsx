import React from 'react'
import styles from "./styles.module.scss"
import MainImage from "../../icons/Main.png"

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.first_layer}>
            <img src={MainImage} alt="Main" />
        </div>
        <div className={styles.second_layer}  >
            <div className={styles.first_block}>
                <h2 className={styles.text}>Качественная офисная мебель в Кыргызстане</h2>
            </div>
            <div className={styles.second_block}>
                 <h4>Шоурум турецкой офисной мебели премиум-качества 
и официальный представитель мирового бренда «BÜROTIME » </h4>    
            </div>
        </div>
    </div>
  )
}

export default MainPage