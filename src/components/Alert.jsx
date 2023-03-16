import Alert from 'react-bootstrap/Alert';

function AlertTxt() {
    return (
        <Alert variant="dark" className='maincontainer' >
            <Alert.Heading>¡Hey! Gusto en tenerte aquí,</Alert.Heading>
            <br />
            <p>
                Nuesto Coder esta revisando tu solicitud.
            </p>
            <br />
            <p>
                Nuestro tiempo máximo estimado para que puedan responder a tu solicitud es de 7 días.
            </p>
            <p>
                Mientras tanto, puedes dejarle un mensaje en los cuadros de más abajo.
            </p>
        </Alert>
    );
}

export default AlertTxt;