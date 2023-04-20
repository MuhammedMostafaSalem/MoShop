import React from 'react'
import '../style/Cart.css'
import { Container } from 'react-bootstrap'
import Announc from '../components/Announcement/Announc';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {
    return (
        <div>
        <Announc/>
        <Container className='cartContainer'>
            <h3>Your Bag</h3>
            <div className='top'>
                <div className='btn topButton'>Continue Shopping</div>
                <div className='topTexts'>
                    <p className='topText'>Shopping Bag(2)</p>
                    <p className='topText'>Your Wishlist (0)</p>
                </div>
                <div className='btn checkoutButton'>Checkout Now</div>
            </div>

            <div className='bottom'>
                <div className='info'>
                    <div className='product'>
                        <div className='productDetail'>
                            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt='' />
                            <div className='details'>
                                <div className='productName'>
                                    <p>Product:</p>
                                    <span>JESSIE THUNDER SHOES</span>
                                </div>
                                <div className='productId'>
                                    <p>ID:</p>
                                    <span>123456789</span>
                                </div>
                                <div className='productColor' style={{backgroundColor: '#000'}}></div>
                                <div className='productSize'>
                                    <p>Size:</p>
                                    <span>37.5</span>
                                </div>
                            </div>
                        </div>
                        <div className='priceDetail'>
                            <div className='productAmountContainer'>
                                <RemoveIcon className='icon'/>
                                <div className='productAmount'>2</div>
                                <AddIcon className='icon'/>
                            </div>
                            <div className='productPrice'>$ 20</div>
                        </div>
                    </div>
                    <div className='product'>
                        <div className='productDetail'>
                            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt='' />
                            <div className='details'>
                                <span className='productName'>
                                    <p>Product:</p>
                                    <span>JESSIE THUNDER SHOES</span>
                                </span>
                                <span className='productId'>
                                    <p>ID:</p>
                                    <span>123456789</span>
                                </span>
                                <div className='productColor' style={{backgroundColor: '#000'}}></div>
                                <div className='productSize'>
                                    <p>Size:</p>
                                    <span>M</span>
                                </div>
                            </div>
                        </div>
                        <div className='priceDetail'>
                            <div className='productAmountContainer'>
                                <RemoveIcon className='icon'/>
                                <div className='productAmount'>2</div>
                                <AddIcon className='icon'/>
                            </div>
                            <div className='productPrice'>$ 20</div>
                        </div>
                    </div>
                </div>

                <div className='summary'>
                    <h3>Order Summary</h3>
                    <div className='summaryItem'>
                        <div className='summaryItemText'>Subtotal</div>
                        <div className='summaryItemPrice'>$ 40</div>
                    </div>
                    <div className='summaryItem'>
                        <div className='summaryItemText'>Estimated Shipping</div>
                        <div className='summaryItemPrice'>$ 5.90</div>
                    </div>
                    <div className='summaryItem'>
                        <div className='summaryItemText'>Shipping Discount</div>
                        <div className='summaryItemPrice'>$ -5.90</div>
                    </div>
                    <div className='summaryItem'>
                        <div className='summaryItemText'>Total</div>
                        <div className='summaryItemPrice'>$ 80</div>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Cart