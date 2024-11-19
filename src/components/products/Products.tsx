import React, { useEffect, useState } from "react";
import styles from './products.module.css';
import { IProduct } from "../../types/types";
import { Link } from "react-router-dom";

export default function Products() {
    //trzeba importować IProduct z types
    const [products, setProducts] = useState<IProduct[]>([]);

  //asychroniczne zapytanie do serwera
  const getProducts = async () => {
    //w fetch mówię jakie dane i skąd je chcę, czyli wstawiam link
    //dodaję mu nazwę zmiennej, w której jest przechowywany
    //dodaję oczekiwanie na odpowiedz await
    const result = await fetch("https://fakestoreapi.com/products");
    const data = await result.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className={styles.shopContainer}>
        {/* map wywołuje zapytanie grupowe, dla całego massiv */}
        {products.map(product => (
            <div className={styles.shopContainerCard} key={product.id}>
            <h3>{product.title}</h3>
            <div className={styles.imgWrapper}>
                <img src={product.image} alt=''/>
            </div>
            <Link to ={String(product.id)}> To product </Link>
            </div>
        ))}
      </div>
    </div>
  );
}
