import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function CommentTable() {
  const [comments, setComments] = useState([]);

  const responses = [
    "Lo solicitado forma parte del proyecto",
    "La consulta solicitada está fuera de alcance",
    "El proyecto será desarrollado dentro del alcance definido",
    "Perdón. ¿Puedes repetir la pregunta?",
    "Las aclaraciones vendrá explicadas en detalle en la propuesta"
  ];

  function handleSubmit(event) {
    event.preventDefault();
    const { name, comment } = event.target.elements;
    const newComment = {
      id: Date.now(),
      name: name.value,
      comment: comment.value,
      date: new Date().toLocaleDateString(),
      response: "Freecoder: " + responses[Math.floor(Math.random() * responses.length)]
    };
    setComments([...comments, newComment]);
    event.target.reset();
  }

  return (
    <div className='maincontainer'>
      {comments.map((comment) => (
        <div style={{ width: '250px' }} className='mb-3 col-md-5 mx-auto' key={comment.id}>
          <div className='maincontainer'>
            <Card.Body>

              <Card.Title>{comment.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{comment.date}</Card.Subtitle>
              <Card.Text>
                {comment.comment}
              </Card.Text>
              <br />
              <Card.Text>
                {comment.response}
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      ))}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Escribe tu nombre" />
        </Form.Group>
        <Form.Group controlId="comment">
          <Form.Label>Comentario</Form.Label>
          <Form.Control type="text" placeholder="Escribe tu comentario" />
        </Form.Group>
        <br />
        <Button className='col-md-3 maincontainer-button  ' variant="outline-dark" type="submit">Enviar Comentario</Button>
      </Form>
    </div>
  );
}

export default CommentTable;

