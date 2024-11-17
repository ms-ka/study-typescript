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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // importuję HashRouter z biblioteki
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
        <Route path="hero-gallery" element={<HeroGallery data={heroes}/>} />
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
      </Route>
    </Routes>
  </HashRouter>
);