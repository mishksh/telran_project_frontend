import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import { getAllSaleProducts } from '../../async_actions/products_req';
import s from './index.module.css'


export default function RandomSale() {

    const dispatch = useDispatch();

    const products_state = useSelector(state => state.products);

    useEffect(() => { dispatch(getAllSaleProducts) }, []);
    
    const getRandomObjects = (array, count) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };
    
      const randomObjects = getRandomObjects(products_state, 3);

  return (
    <div className={s.products_container}>
        {randomObjects.map(el => <ProductItem key={el.id} {...el} />)}
    </div>
  )
}





