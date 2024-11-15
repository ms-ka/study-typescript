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
import HomePage from "./components/homePage/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // importuję HashRouter z biblioteki
  <HashRouter>
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
      </Route>
    </Routes>
  </HashRouter>
);
