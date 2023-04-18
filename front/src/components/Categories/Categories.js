import React from 'react'
import './Categories.css'
import { Container, Row } from 'react-bootstrap'
import CategoryItem from '../categoryItem/CategoryItem'
import { categories } from '../../data/categoriesData';

const Categories = () => {
    return (
        <Container className='divContainer'>
            <Row>
                {
                    categories.map(
                        (item) => (
                            <CategoryItem item={item} key={item.id} />
                        )
                    )
                }
            </Row>
        </Container>
    )
}

export default Categories