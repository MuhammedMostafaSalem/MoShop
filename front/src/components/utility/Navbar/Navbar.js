import React, { useState } from 'react'
import "./Navbar.css"
import { Navbar, Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from '../../../assets/logoipsum-280.svg';

const NavBar = () => {
    // select toggle menu mobile
    const [mobile, setMobile] = useState(false);

    return (
        <Navbar expand="lg">
            <Container>
                <div className={mobile ? "active_menu" : "nav_menu"} onClick={()=> setMobile(true)}>
                    <div className='inputItem'>
                        <input placeholder='Search' type="search" />
                        <SearchIcon className='i' />
                    </div>
                </div>
                <Navbar.Brand className='logo'>
                    <img src={logo} alt="" />
                    <div>MoShop</div>
                </Navbar.Brand>

                <div className='icons'>
                    <div className='i auth'>register</div>
                    <div className='i auth'>sign in</div>
                    <div className='cartIcon'>
                        <LocalMallOutlinedIcon className='i cartIconI' />
                        <span className="position-absolute top-1 ms-1 translate-middle badge rounded-pill bg-primary">
                            1
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <div className='mobile_bar' onClick={()=> setMobile(!mobile)}>
                        <span>
                            {
                                mobile ? <CloseOutlinedIcon className='iconBar'/> : <MenuOutlinedIcon className='iconBar'/>
                            }
                        </span>
                    </div>
                </div>
            </Container>
        </Navbar>  
    )
}

export default NavBar