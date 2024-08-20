import React from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';


function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroup.Item
          key={task.id}
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="me-2"
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
          </div>
          <div>
            <Button
              variant="outline-primary"
              size="sm"
              className="me-2"
              onClick={() => onEdit(task)}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TaskList;
