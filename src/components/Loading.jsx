import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {

    return (
        <>
            <Button id='button-crearperfil' className="consolas-font" variant="outline-dark" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="false"
                />
            </Button>
        </>
    );
}

export default Loading;