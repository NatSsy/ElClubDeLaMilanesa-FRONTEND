import React from 'react'
import { NavLink } from 'react-router-dom'
import { DiffMenus } from '../components/data-Mnus/DiffMenus'

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const MenuPage = () => {


    return (
        
            <Container >
                <Row>
                    {DiffMenus.map((menu) => {
                        return <Col key={menu.id} >
                            <Card className='card bg-dark text-white m-3 col-3 p-2 col-md-4 col-xl-3' border="light" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={menu.url_principal} />
                                <Card.Body>
                                    <Card.Title>{menu.categoria}</Card.Title>
                                    <Card.Text>
                                        {menu.detalle}
                                    </Card.Text>
                                    <Card.Text>
                                        {menu.estado}
                                    </Card.Text>
                                    <Card.Text>
                                        {menu.precio}
                                    </Card.Text>
                                    <NavLink to={`/Menus/${menu.categoria}`} >
                                        Ver Menus...
                                    </NavLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
    )}
