import ReactDOM from "react-dom/client";
import "./index.css";
//import Lesson06 from './lesson/lesson06/Lesson06';
//import Lesson07 from './lesson/lesson07/Lesson07';
import Lesson08 from "./lesson/lesson08/Lesson08";
import FetchDog from "./components/fetchDog/FetchDog";
import FetchFox from "./components/fetchFox/FetchFox";
import Lesson09 from "./lesson/lesson09/Lesson09";
import Lesson10 from "./lesson/lesson10/Lesson10";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Lesson10/>
    {/* <FetchFox /> */}
  </>
);
