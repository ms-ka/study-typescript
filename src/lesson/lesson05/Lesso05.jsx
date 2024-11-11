import { heroes } from "./data";
import "./lesson05.css";
import HeroCard from "../../components/gallery/HeroCard";

function Lesson05() {
  console.log(heroes);
  return (
    <div className="lesson-container">
      <h2>Lesson 05</h2>
      <p>React map() components</p>
      <section className="grid-container">
        {heroes.map((hero) => (
          // odniesienie do HeroCard
          //dodanie propsów
          <HeroCard
            //każde znaczenie zostaje przekazane propsem do HeroCard, tam zastosowane
            key={hero.id}
            isDark={hero.isDark}
            name={hero.name}
            image={hero.image}
            age={hero.age}
            weapons={hero.weapons}
          />
        ))}
      </section>
    </div>
  );
}

export default Lesson05;
