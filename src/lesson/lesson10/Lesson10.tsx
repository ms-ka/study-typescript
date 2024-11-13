import React from 'react'
import styles from './lesson10.module.css'
import CatFact from '../../components/catFact/CatFact';
import MyButton from "../../components/myButton/MyButton";

export default function Lesson10() {
    return (
        <div className={styles.lessonContainer}>
            <h2>Lesson 10</h2>
            <CatFact />
        </div>
    )
}


