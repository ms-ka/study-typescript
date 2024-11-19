import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IProduct } from '../types/types'

export default function ProductPage() {
    //params zabiera dane z okienka adresu strony
    const {id} = useParams();

    const [product, setProduct] = useState<IProduct>({
        id: 0,
        title: 'string',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
          rate: 0,
          count: 0,
        }
      })

const getProduct = (id:string) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then (res=> res.json())
    .then (data => setProduct(data));
}

useEffect(() => {
//wywołuję funkcję z params id
getProduct(id as string);
}, [id]);

  return (
    <div className='lesson-container'>
        <p>ProductPage</p>
        <p>{product.title}</p>
        <h3>{product.description}</h3>
        <img width={250} src={product.image} alt=''/>
        <Link to ='../lesson-14'>back to product </Link>
    </div>
  )
}
