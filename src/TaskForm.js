import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TaskForm({ onSubmit, task }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="formTitle">
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <br/>
      <Form.Group controlId="formDescription">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
    <br/>
      <Button variant="primary" type="submit">
        {task ? 'Update Task' : 'Add Task'}
      </Button>
    <br/><br/><br/>
    <h4>Tasks to be completed:</h4>
    </Form>
  );
}

export default TaskForm;
