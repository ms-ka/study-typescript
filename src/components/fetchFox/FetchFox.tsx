import React, { useEffect, useState } from 'react';
import Loader from "../loader/Loader";
import MyButton from '../myButton/MyButton';
import './fetchfox.css';

// * 5. протипизировали данные с сервера
interface IFoxData{
    image: string;
    link: string;
}

export default function FetchFox(): JSX.Element {

  // * 3. создали переменную состояния и функцию для ее изменения с помощью useState(). в ней будет храниться картинка с сервера  
//przekazuję useState string, otrzymuję również string
//tutaj jest zmienna tymczasowa, funkcja dla zmiany z pomocą useState
const [foxImg, setFoxImg] = useState<string> ('');  

  // * 7. создаем переключатель для отображения элемента сигнализирующего о загрузке - loader на странице
  const [loading, setLoading] = useState<boolean>(true);

    // * 1. создали функцию получения данных с сервера
//tutaj funkcja otrzymuje dane z serwera
const fetchFox= async (): Promise<void> => {
const res = await fetch('https://randomfox.ca/floof/')
const data:IFoxData = await res.json()
//zapis zmienionych danych w zmiennej 
    // * 4. записываем данные в переменную состояния для последующего использования и изменения
setFoxImg(data.image);
setLoading(false);
};

 // * 8 создаем функцию обработчик для кнопки, которая включает loader и с небольшой задержкой посылает запрос за данными на сервер
 const handleGetFox = () => {
  setLoading(true);
  // setTimeout не обязателен, но за счет него loader крутится дольше и не обрывается резко
  setTimeout(() => {
    fetchFox();
  }, 1000);
};

  // * 2. поместили вызов функции обращения к серверу в useEffect() с пустым массивом зависимостей, чтобы она вызывалась только в начале жизненного цикла
//tutaj funkcja zwraca się do serwera w useEffect poprzez pusty massiv, aby funkcja uruchomiła się tylko raz
useEffect(() => {
fetchFox()
}, [])

  return (
    <div className='lesson=container'>
        <h3>Fetch Fox</h3>
              {/* 6. добавили в верстку картинку и кнопу с обработчиком onClick для функции */}
        <MyButton text = 'get fox!' func={handleGetFox}/>
              {/* если в loading true мы покажем Loader, если false - показываем данные */}
        {/* контейнер-обертка под размеры которого будет обрезаться картинка, как фотография под размеры рамки */}

      {/* если в loading true мы покажем Loader, если false - показываем данные */}
      {loading ? <Loader /> : (
        <div className="fox-wrapper">
          <img src={foxImg} alt="" />
        </div>
      )}
    </div>
  )
}
