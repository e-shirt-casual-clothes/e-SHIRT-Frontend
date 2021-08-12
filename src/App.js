import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import  { AuthProvider }from './contexts/auth';
  
function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
     <Routes />
    </Router>
    </AuthProvider>
  );
}
  
export default App;