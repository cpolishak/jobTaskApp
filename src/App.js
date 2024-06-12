import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import CompletedPage from './sections/completed/completedPage';
// import Todo from './sections/toDos/toDo';
import TodoPage from './sections/toDos/toDoPage';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Navigate to='home' replace />}/>
        <Route
          path='home'
          element={<TodoPage />}
        />
        <Route
          path='completed'
          element={<CompletedPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
