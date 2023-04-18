import React from 'react'
import './Products.css'
import { Row } from 'react-bootstrap'
import { popularProducts } from './../../data/popularProductsData';
import Product from '../Product/Product';

const Products = () => {
    return (
        <div className='divContainer'>
            <Row>
                {
                    popularProducts.map(item => {
                        return (
                            <Product item={item} key={item.id}/>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Products