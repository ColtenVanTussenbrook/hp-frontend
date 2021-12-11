import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProjectDashboard from './components/ProjectDashboard';
import Project from './components/Project';

const App: React.FC = () => {
  const mockDataEndpoint: string = 'https://61b37a9aaf5ff70017ca1f7e.mockapi.io/projects2';

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<ProjectDashboard endpoint={mockDataEndpoint} />} /> 
        <Route path="/project/:id" element={<Project endpoint={mockDataEndpoint} />}  />
      </Routes>
    </div>
  );
}

export default App;
