import HeroCard from "./HeroCard";

interface IHero{
  id: string;
  name: string;
  image: string;
  weapons: string[];
}

//Interfejs IHero - Definiuje strukturę dla każdego bohatera.
interface IHeroGalleryProps {
  heroes: IHero[];
}

//Interfejs IHeroGalleryProps - Przechowuje tablicę heroes, które zostaną przekazane do HeroGallery
function HeroGallery({ heroes }: IHeroGalleryProps) {
  return (
    <div className="grid-container">
      {/* mapowanie - Teraz HeroGallery iteruje po heroes, a każdy element jest przekazywany jako pojedynczy HeroCard. */}
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          name={hero.name}
          image={hero.image}
          weapons={hero.weapons}
        />
      ))}
    </div>
  );
}

export default HeroGallery;
