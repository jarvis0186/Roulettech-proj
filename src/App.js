import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:8000/api/tasks/');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    await axios.post('http://localhost:8000/api/tasks/', task);
    fetchTasks();
  };

  const editTask = async (task) => {
    await axios.put(`http://localhost:8000/api/tasks/${task.id}/`, task);
    setEditingTask(null);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
    fetchTasks();
  };

  const toggleComplete = async (id) => {
    const task = tasks.find(task => task.id === id);
    await axios.put(`http://localhost:8000/api/tasks/${id}/`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Task Manager</h1>
          <TaskForm
            onSubmit={editingTask ? editTask : addTask}
            task={editingTask}
          />
          <TaskList
            tasks={tasks}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
