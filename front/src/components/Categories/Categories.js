import React from 'react'
import './Categories.css'
import { Container } from 'react-bootstrap'
import CategoryItem from '../categoryItem/CategoryItem'
import { categories } from '../../data/categoriesData';

const Categories = () => {
    return (
        <Container className='divContainer'>
        {
            categories.map(
                (item) => (
                    <CategoryItem item={item} key={item.id} />
                )
            )
        }
        </Container>
    )
}

export default Categories