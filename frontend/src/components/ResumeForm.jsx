import React, { useState } from 'react';
import axios from 'axios';

const ResumeForm = () => {
    const [resume, setResume] = useState('');
    const [description, setDescription] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/generate", {resume, description});
            setResult(response.data);
        } catch(error) {
            console.error('Error generating resume', error);
            setResult('Something went wrong please try again !!..')
        }
    }

  return (
    <div className="max-w-2xl mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
            <textarea 
                className="w-full h-32 p-2 border rounded"
                placeholder='Paste Your Resume details here'
                value={resume}
                onChange={(e) => setResume(e.target.value)}
            />
            <textarea
                className="w-full h-32 p-2 border rounded"
                placeholder='Paste your job description here'
                value = {description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type='submit' className="px-4 py-2 bg-blue-600 text-white rounded">
                Generate Tailored Resume
            </button>
        </form>
        { result && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded">
            <h2 className="font-bold text-lg mb-2">Generated Resume:</h2>
            <pre className="whitespace-pre-wrap">{result}</pre>
          </div>
        )}
    </div>
  );
};

export default ResumeForm;
