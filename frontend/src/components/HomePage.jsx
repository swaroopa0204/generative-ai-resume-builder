import React from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {
    const navigate = useNavigate();
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Welcome to Resume AI Builder</h1>
          <p className="text-lg mt-4">Generate a personalized resume and prepare for interviews!</p>
          <button 
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded"
            onClick={ () => navigate('/resumeBuilder')} >
            Start
          </button>
        </div>
    </div>
    )
}

export default HomePage;