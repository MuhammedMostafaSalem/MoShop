import React from 'react'
import './CategoryItem.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const CategoryItem = ({item}) => {
    return (
        <Col lg='4' md='6' sm='6' xs='12'>
            <div className='categoryItem'>
                <img src={item.img} alt='' />
                <div className='info'>
                    <h3>{item.title}</h3>
                    <Link to={`/products/${item.cat}`}>
                        <div className='btn'>SHOP NOW</div>
                    </Link>
                </div>
            </div>
        </Col>
    )
}

export default CategoryItem