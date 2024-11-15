import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./homePage.module.css"

export default function HomePage() {
  return (
    <div className={styles.gridLessonContainer}>
        {/* <h2>Home Page</h2> */}
        {/* tworzę komponenty które posiadają link do wszystkich lekcji */}
    {/* link importuję z biblioteki, jest to ścieżka, bez aktywizacji  */}
    <Link to='lesson-1'><div>Lesson 1</div></Link>
    <Link to='lesson-2'><div>Lesson 2</div></Link>
    <Link to='lesson-3'><div>Lesson 3</div></Link>
    <Link to='lesson-4'><div>Lesson 4</div></Link>
    </div>
  )
}
