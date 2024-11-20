import ReactDOM from "react-dom/client";
import "./index.css";
import Lesson11 from "./lesson/lesson11/Lesson11";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import FetchDog from "./components/fetchDog/FetchDog";
import HeroGallery from "./components/gallery/HeroGallery";
import { heroes } from "../src/lesson/lesson05/data";
import Lesson01 from "./lesson/lesson01/Lesson01";
import Lesson02 from "./lesson/lesson02/Lesson02";
import Lesson03 from "./lesson/lesson03/Lesson03";
import Lesson04 from "./lesson/lesson04/Lesson04";
import Lesson05 from "./lesson/lesson05/Lesson05";
import Lesson06 from "./lesson/lesson06/Lesson06";
import Lesson07 from "./lesson/lesson07/Lesson07";
import Lesson12 from './lesson/lesson12/Lesson12'
import HomePage from "./components/homePage/HomePage";
import Lesson10 from "./lesson/lesson10/Lesson10";
import Lesson09 from "./lesson/lesson09/Lesson09";
import Lesson08 from "./lesson/lesson08/Lesson08";
import Homework12 from "./components/homework/Homework12";
import Lesson13 from "./lesson/lesson13/Lesson13";
import Homework03 from "./components/homework/Homework03";
import Homework04 from "./components/homework/Homework04";
import Lesson14 from "./lesson/lesson14/Lesson14";
import ProductPage from './components/productPage/ProductPage'
import FormGender from "./components/formGender/FormGender";
import CatFact from "./components/catFact/CatFact"
import { CartProvider } from "./context/cartContext";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import NoPage from "./components/noPage/NoPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CartProvider>
  {/* // importuję HashRouter z biblioteki
  //props future został dodany aby nie przychodziły warningi w konsoli */}
  <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {/* importuję komponent routes obok każdego komponentu */}
    <Routes>
      {/* w korzeniu ścieżki Route jest props, czyli element i path*/}
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
      {/* zamiast Home Page będzie Layout */}
        <Route path="/" element={<Layout />}>
        {/* teraz strona Home Page wchodzi na miejsce Outlet w Layout */}
        <Route path="/" element={<HomePage/>} />
        {/* w browser trzeba wpisać /#/fetch-dog */}
        <Route path="fetch-dog" element={<FetchDog />} />
        {/*znajduje się w lekcji 5, trzeba dodać style z lekcji 5 do galerii  */}
        <Route path='homework-3' element={<Homework03/>} />
        <Route path='homework-4' element={<Homework04/>} />
        <Route path='homework-12' element={<Homework12/>} />
        <Route path="hero-gallery" element={<HeroGallery data={heroes}/>} />
        <Route path="cat-fact" element={<CatFact/>} />
        <Route path="gender-form" element={<FormGender/>} />
        <Route path="products" element={<Products/>} />        
        <Route path='products/:id'element={<ProductPage/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="lesson-10" element={<Lesson10/>} />
        <Route path='lesson-1'element={<Lesson01/>}/>
        <Route path='lesson-2'element={<Lesson02/>}/>
        <Route path='lesson-3'element={<Lesson03/>}/>
        <Route path='lesson-4'element={<Lesson04/>}/>
        <Route path='lesson-5'element={<Lesson05/>}/>
        <Route path='lesson-6'element={<Lesson06/>}/>
        <Route path='lesson-7'element={<Lesson07/>}/>
        <Route path='lesson-8'element={<Lesson08/>}/>
        <Route path='lesson-9'element={<Lesson09/>}/>
        <Route path='lesson-10'element={<Lesson10/>}/>
        <Route path='lesson-11'element={<Lesson11/>}/>
        <Route path='lesson-12'element={<Lesson12/>}/>
        <Route path='lesson-13'element={<Lesson13/>}/>
        <Route path='lesson-14'element={<Lesson14/>}/>
        <Route path="*" element={<NoPage/>} />
        {/* można wpisać drogę do produktu */}
      </Route>
    </Routes>
  </HashRouter>
</CartProvider>
);
