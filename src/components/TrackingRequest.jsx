import { useState } from 'react';
import {
  Col,
  Form,
  Row,
  Container,
  Button,
} from 'react-bootstrap'
import swal from 'sweetalert2';
import Loading from './Loading'
import Navegacion from './Navegacion';
import TrackingDeploy from './TrackingDeploy';
import axios from 'axios';


function TrackingRequest() {

  const [loading, setLoading] = useState(false);
 

  const carga = () => {
    const numSeguimiento = document.getElementById("numSeguimiento").value;
    if (!numSeguimiento) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar un número de seguimiento válido!',
      })
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }
   axios.post(import.meta.env.VITE_MAIN_API + '/seguimiento', numSeguimiento)
    .then(res => {
      swal.fire({
        icon: 'success',
        title: res.data,
        showConfirmButton: false,
        timer: 1500,
      })
    })
    .catch(err => {
      swal.fire({
        icon: 'error',
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500,
      })
    }) 
    console.log(numSeguimiento)
  }

  return (
    <>

      <div className='maincontainer'>
        {/*  <Navegacion /> */}

        <div className='text-center'>
          <Form className='maincontainer'>
            <Row className="align-content-center">
              <Col>
                <Form.Control id="numSeguimiento" placeholder="Numero de seguimiento" style={{ width: '350px' }} />
              </Col>
              <br />
              <Col>
                <Form.Control placeholder="Nombre" style={{ width: '350px' }} />
              </Col>
              <Button id='button-crearperfil' className='col-md-2 mx-auto-2 consolas-font ' variant="outline-dark" onClick={() => carga()}>
                Buscar Orden
              </Button >
            </Row>
          </Form>
        </div>

        <Container>
          <br />
          {loading ?
            <Loading /> :
            <TrackingDeploy />
          }
        </Container>

      </div>
    </>
  );
}

export default TrackingRequest;