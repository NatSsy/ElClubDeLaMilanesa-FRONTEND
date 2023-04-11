import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RealizarPedido } from '../components/helpers/ValidarPedido';




export const ModalPedido = ({ NombreMenu, PrecioMenu }) => {
  const FechayHora = new Date();
  console.log(FechayHora);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //funcion para el submit
  const ValidarPedido = RealizarPedido(NombreMenu, PrecioMenu, FechayHora);


  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        Realizar el pedido
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark text-white' closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white' >{NombreMenu} con valor de: {PrecioMenu}
          <form id='validarUsuario'>
            <label>email</label>
            <input type='email' className="form-control w-30" id="email" aria-describedby="emailHelp" placeholder="bob23@gmail.com" />
          </form>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-white' >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
