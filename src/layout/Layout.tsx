import styles from './layout.module.css'
import { Outlet } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function Layout() {
  return (
    <>
    {/* header wyświetla nagłówek */}
    <Header/>
      {/* main będzie elastyczne, zmienne, z różnymi komponentami z routera */}
      <main className={styles.main}>
        {/* importuję Outlet z biblioteki, na miejscu Outlet będą pojawiały się zmienne komponenty */}
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}
