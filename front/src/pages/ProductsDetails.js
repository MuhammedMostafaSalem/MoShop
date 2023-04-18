import React from 'react'
import '../style/ProductsDetails.css'
import Announc from '../components/Announcement/Announc'
import { Container, Form } from 'react-bootstrap'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Newsletter from '../components/Newsletter/Newsletter';

const ProductsDetails = () => {
    return (
        <div>
            <Announc/>
            <Container>
                <div className='wrapper'>
                    <div className='imgContainer'>
                        <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt='' />
                    </div>
                    <div className='infoContainer'>
                        <h3>Denim Jumpsuit</h3>
                        <p className='desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, consequat id
                            condimentum ac, volutpat ornare.
                        </p>
                        <span className='price'>$ 20</span>
                        <div className='filterContainer'>
                            <div className='filter'>
                                <span className='filterTitle'>Color</span>
                                <div className='filterColorContainer'>
                                    <div className='filterColor' style={{backgroundColor: 'black'}}></div>
                                    <div className='filterColor' style={{backgroundColor: 'darkblue'}}></div>
                                    <div className='filterColor' style={{backgroundColor: 'gray'}}></div>
                                </div>
                            </div>
                            <div className='filter'>
                                <span className='filterTitle'>Size</span>
                                <Form.Select className='filterSize'>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </Form.Select>
                            </div>
                        </div>

                        <div className='addContainer'>
                            <div className='amountContainer'>
                                <RemoveIcon className='icon'/>
                                <span className='amount'>1</span>
                                <AddIcon className='icon'/>
                            </div>
                            <div className='btn'>Add To Cart</div>
                        </div>
                    </div>
                </div>
            </Container>
            <Newsletter/>
        </div>
    )
}

export default ProductsDetails