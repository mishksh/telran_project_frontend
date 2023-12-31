import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSaleProducts } from '../../async_actions/products_req';
import s from './index.module.css'
import ProductItem from '../ProductItem';



export default function SaleContainer() {

    const dispatch = useDispatch();

    const products_state = useSelector(state => state.products);

    useEffect(() => { dispatch(getAllSaleProducts) }, []);


    return (
        <div className={s.products_container} >
            {
            products_state
                .filter(el => !el.hide_price)
                .map(el => <ProductItem key={el.id} {...el} />)
            }
        </div>
    )
}
