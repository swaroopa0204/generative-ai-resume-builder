import ResumeForm from './components/ResumeForm';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <HomePage /> } />
        <Route path = '/resumeBuilder' element = { <ResumeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
