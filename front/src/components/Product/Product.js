import React from 'react'
import './Product.css'
import { Col } from 'react-bootstrap'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({item}) => {
    return (
        <Col lg='3' md='3' sm='6' xs='12'>
            <div className='productsContainer'>
                <div className='circle'></div>
                <img src={item.img} alt=''/>
                <div className='info'>
                    <div className='icon'>
                        <ShoppingCartOutlinedIcon/>
                    </div>
                    <div className='icon'>
                        <SearchIcon/>
                    </div>
                    <div className='icon'>
                        <FavoriteBorderIcon/>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Product