import React from 'react'
import './Slider.css'
import img1 from './imgsSlider/1.jpg';
import img2 from './imgsSlider/2.png';
import img3 from './imgsSlider/3.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from "styled-components"

const Slider = () => {
    const slideImages = [
        {
            id: 1,
            img: img1,
            title: "SUMMER SALE",
            desc: "Don't compromise on style! get flat 30% off for new arrivals.",
            bg: "f1a7b8",
        },
        {
            id: 2,
            img: img2,
            title: "AUTUMN COLLECTION",
            desc: "Don't compromise on style! get flat 30% off for new arrivals.",
            bg: "f5fafd",
        },
        {
            id: 3,
            img: img3,
            title: "LOUNGEWEAR LOVE",
            desc: "Don't compromise on style! get flat 30% off for new arrivals.",
            bg: "fbf0f4",
        },
    ];

    
    const properties = {
        prevArrow: <button className='buttonStyle'><ArrowBackIcon/></button>,
        nextArrow: <button className='buttonStyle'><ArrowForwardIcon/></button>
    }

    const SlideDiv = styled.div`
        background-color: #${(props) => props.bg};
    `;
    // style={{backgroundColor: `${item.bg}`}} 
    return (
        <div className="slide-container">
            <Slide {...properties}>
                {
                    slideImages.map(item=> (
                        <SlideDiv className='slideDiv' bg={item.bg} key={item.id}>
                            <div className='ImgContainer'>
                                <img src={item.img} alt='' />
                            </div>
                            <div className='InfoContainer'>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <div className='btn'>Show now</div>
                            </div>
                        </SlideDiv>
                    ))
                } 
            </Slide>
        </div>
    )
}

export default Slider