import React from 'react'
import './CategoryItem.css'
const CategoryItem = ({item}) => {
    return (
        <div className='categoryItem'>
            <img src={item.img} alt='' />
            <div className='info'>
                <h3>{item.title}</h3>
                <div className='btn'>SHOP NOW</div>
            </div>
        </div>
    )
}

export default CategoryItem