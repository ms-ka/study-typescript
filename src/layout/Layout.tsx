import styles from './layout.module.css'
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    {/* header ma być stały, niezmienny */}
      <header className={styles.header}>
        {/* trzeba importować NavLink z biblioteki */}
        {/* nawigowanie do linku */}
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/"}>Home page</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"fetch-dog"}>Fetch dog</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"hero-gallery"}>Hero gallery</NavLink>
        {/* tylko jeśli dany link jest aktywny, czyli isActive jest true to włączane są style z css */}
      </header >

      {/* main będzie elastyczne, zmienne, z różnymi komponentami z routera */}
      <main>
        {/* importuję Outlet z biblioteki, na miejscu Outlet będą pojawiały się zmienne komponenty */}
        <Outlet/>
      </main>
    </>
  );
}
