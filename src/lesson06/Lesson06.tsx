export default function Lesson06(){

//Tworzenie zmiennych

    //Stringi
let username: string = "Frodo"; 
username = "Pipin";
console.log(username);

    // Cyfry
let number: number = 42;
number = 2 + 2;
console.log(number);

    //Boolean
let isAdmin: boolean = true;
isAdmin = 2>3;
console.log(isAdmin);

    //NULL/ Undefined
let emptyValue: null = null;
console.log(emptyValue); // gdy wynik ma być nulowy

let empty: undefined = undefined;
console.log(empty); //rezultat zmiennej która nie przyswoiła znaczenia, oczekujemy wyniku, ale nie został on określony

//===========Massivy
//massiv tylko z stringów
const rgb: string[] = ['red', 'green', 'blue'];
console.log(rgb);

//massiv tylko z liczb
const numbers: number[] = [1,2,3,4,5];
numbers.push(8);
console.log(numbers);

//tylko dla 2 elem. massiva
const myArray: [string, number] = ['apple', 42];
console.log(myArray);

// =============Obiekty

//tworzenie obiektu

//tutaj szablon dla obiektu
interface IHero {
    name: string;
    age: number;
    isDark: boolean;
}
//objekt dziedzicący od poprzedniego obiektu
interface IMagician extends IHero {
    magic():void;
}

interface IVillain{
    name: string
    isVillain: true
}

//a tu konkretny obiekt z użyciem szablonu
const aragorn: IHero ={
    name:'Aragorn',
    age: 150,
    isDark: false
}
const legolas: IHero ={
    name:'Legolas',
    age: 360,
    isDark: false
}

const saruman: IVillain = {
    name: "Saruman",
    isVillain: true
}

    return (
        <div>
            <h2>Lesson 06 </h2>
            <p>React TypeScript</p>
            <p>Самое важное на этом уроке происходит внутри компонента в теле функции и в консоли браузера ⚡️</p>
        </div>
    );
}