import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import { useParams } from 'react-router-dom'
import { MenuSeleccion } from '../components/helpers/MenuPorSeleccion';
import { ModalPedido } from '../components/ModalPedido';

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const Menus = () => {
    let {NombreMenu}=useParams(); //pase el nomobre por parametro en la url
   
    const menuss = MenuSeleccion(NombreMenu);
    
    return (
        <div>
            {
                menuss.map((menu) => {
                    return <div key={menu.id}>
                        <Container>
                            <Row>
                                <Col>
                                    <Card className='card bg-dark text-white m-3 col-3 p-2 col-md-4 col-xl-3' border="light" style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={menu.url_entrada} alt={menu.entrada} />
                                        <Card.Body>
                                            <Card.Title>{menu.entrada}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='card bg-dark text-white m-3 col-3 p-2 col-md-4 col-xl-3' border="light" style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={menu.url_principal} alt={menu.principal} />
                                        <Card.Body>
                                            <Card.Title>{menu.principal}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='card bg-dark text-white m-3 col-3 p-2 col-md-4 col-xl-3' border="light" style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={menu.url_postre} alt={menu.postre} />
                                        <Card.Body>
                                            <Card.Title>{menu.postre}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <div className='row p-4'>
                            <div className='col-md-12 offset-md-6'>
                            <h2 className='text-white'>
                            el precio es=${menu.precio}
                        </h2>
                        <ModalPedido NombreMenu={menu.categoria} PrecioMenu={menu.precio} />
                            </div>
                        </div>
                        
                    </div>
                })
            }
        </div>
    )


}
