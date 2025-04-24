# Genai-resume-builder

## 📄 Overview

🚀 The **genai-resume-builder** is a full-stack web application designed to generate **tailored resumes** using **GPT-3.5** by OpenAI. It allows users to input their personal resume details and a job description, and receive a highly personalized, AI-generated resume suited for that job.
👨‍💻 Technologies: React · Spring Boot · OpenAI GPT-3.5/4 · Axios · Heroku · Netlify

### Key Features:
- **AI-driven resume generation** using OpenAI's GPT model
- Fully **customizable** input forms for resumes and job descriptions
- Responsive, modern UI built with **React** and styled with **Tailwind CSS**
- Backend powered by **Spring Boot**, integrating seamlessly with the OpenAI API
- Optimized for low-cost usage with adjustable parameters like **temperature** and **max tokens**

## 🚀 Technology Stack

- **Frontend**: 
  - **React** for building the user interface
  - **Tailwind CSS** for sleek, responsive styling
  - **Axios** for handling API requests

- **Backend**:
  - **Spring Boot** for building the RESTful API
  - **Java** for backend logic and API integration
  - **OpenAI API** for generating AI-powered resume content

- **Others**:
  - **Postman** for testing and debugging API endpoints
  - **GitHub** for version control and collaboration
  - **Maven** for dependency management

## 🧑‍💻 How It Works

1. **Frontend (React + Tailwind CSS)**:
   - The user enters their resume details and the job description into input fields.
   - Upon submission, the data is sent to the backend via a POST request.

2. **Backend (Spring Boot + OpenAI API)**:
   - The Spring Boot backend receives the user inputs and formats a prompt.
   - The prompt is sent to OpenAI's GPT model, which generates a tailored resume.
   - The generated resume is returned to the frontend and displayed to the user.

3. **Customization**:
   - Users can adjust the temperature and token limits to control the creativity and length of the AI-generated resume.

## ⚙️ Setup and Installation

### Prerequisites:
- **Node.js** and **npm** for React
- **Java 17+** for Spring Boot
- **Maven** for dependency management in Spring Boot

### Clone the Repository:
```bash
git clone https://github.com/your-username/ai-powered-resume-builder.git
cd ai-powered-resume-builder
