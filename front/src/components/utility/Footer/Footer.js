import React from 'react'
import './Footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg='3' md='6' sm='12'>
                        <div className='logo'>
                            <img src="logoipsum-280.svg" alt="" />
                            <div>MoShop</div>
                        </div>
                        <p className='desc'>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                        </p>
                        <div className='socialContainer'>
                            <div className='socialIcon' style={{backgroundColor: '#3B5999'}}>
                                <FacebookRoundedIcon/>
                            </div>
                            <div className='socialIcon' style={{backgroundColor: '#E4405F'}}>
                                <InstagramIcon/>
                            </div>
                            <div className='socialIcon' style={{backgroundColor: '#55ACEE'}}>
                                <TwitterIcon/>
                            </div>
                            <div className='socialIcon' style={{backgroundColor: '#E60023'}}>
                                <PinterestIcon/>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <div className='foote_quick_links'>
                            <h4>top categories</h4>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to='#'>Home</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>Man Fashion</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>Woman Fashion</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>Accessories</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>Wishlist</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <div className='foote_quick_links'>
                            <h4>useFul links</h4>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to='#'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>My Account</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>Order Tracking</Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Link to='#'>Terms</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <div className='foote_quick_links'>
                            <h4>contact</h4>
                            <ListGroup>
                                <ListGroupItem>
                                    <span>
                                        <LocationOnIcon className='i'/>
                                        <p>egypt</p>
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span>
                                        <LocalPhoneIcon className='i'/>
                                        <p>+20 100000000000</p>
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span>
                                        <MailOutlineIcon className='i'/>
                                        <p>example@gmail.com</p>
                                    </span>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer_copyright'>
                            copyright &copy;{year} developed by muhammed mostafa. 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer