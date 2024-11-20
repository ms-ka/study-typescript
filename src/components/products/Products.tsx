import { useEffect, useState } from "react";
import styles from './products.module.css';
import { IProduct } from "../../types/types";
import { Link } from "react-router-dom";

export default function Products() {
    //trzeba importować IProduct z types
    // w zmiennej products przechowywane są wszystkie produkty, które użyję potem w return
    const [products, setProducts] = useState<IProduct[]>([]);

  //asychroniczne zapytanie do serwera
  const getProducts = async () => {
    //w fetch mówię jakie dane i skąd je chcę, czyli wstawiam link
    //dodaję mu zmienną 'rezultat', w której przechowywana będzie odpowiedz
    //dodaję oczekiwanie na odpowiedz await
    const response = await fetch("https://fakestoreapi.com/products");
    //tworzę zmienną 'data', w której będzie rezultat zmienionego, za pomocą metody json zapytania 'result'
    //dodaję oczekiwanie na zmianę
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  //tutaj już mam odpowiedz w formie 'data'
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className={styles.shopContainer}>
        {/* map wywołuje zapytanie grupowe, dla całego massiv */}
        {products.map(product => (
          // każda karta będzie w sobie zawierała klucz z inf o produkcie
            <div className={styles.shopContainerCard} key={product.id}>
            <h5>{product.title}</h5>
            <h6>🔥{product.price} €</h6>
            <div className={styles.imgWrapper}>
                <img src={product.image} alt=''/>
            </div>
            <Link to = {String(product.id)}> ➡️ To product ⬅️</Link>
            </div>
        ))}
      </div>
    </div>
  );
}
