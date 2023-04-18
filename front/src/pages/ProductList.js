import React from 'react'
import '../style/ProductList.css'
import Announc from '../components/Announcement/Announc'
import { Form } from 'react-bootstrap'
import Products from '../components/Products/Products'
import Newsletter from '../components/Newsletter/Newsletter'

const ProductList = () => {
    return (
        <div className='ProductListContainer'>
            <Announc/>
            <h3>Dresses</h3>
            <div className='filterContainer'>
                <div className='filter'>
                    <span className='filterText'>Filter Products:</span>
                    <Form.Select>
                        <option className='option'>
                            Color
                        </option>
                        <option value="1" className='option'>White</option>
                        <option value="2" className='option'>Black</option>
                        <option value="3" className='option'>Red</option>
                        <option value="4" className='option'>Blue</option>
                        <option value="5" className='option'>Yellow</option>
                        <option value="6" className='option'>Green</option>
                    </Form.Select>

                    <Form.Select>
                        <option className='option'>
                            Size
                        </option>
                        <option value="1" className='option'>XS</option>
                        <option value="2" className='option'>S</option>
                        <option value="3" className='option'>M</option>
                        <option value="4" className='option'>L</option>
                        <option value="5" className='option'>XL</option>
                    </Form.Select>
                </div>

                <div className='filter'>
                    <span className='filterText'>Sort Products:</span>
                    <Form.Select>
                        <option>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </Form.Select>
                </div>
            </div>

            <Products/>
            <Newsletter/>
        </div>
    )
}

export default ProductList