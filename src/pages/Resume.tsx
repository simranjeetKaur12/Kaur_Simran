import React from 'react';
import { Briefcase, GraduationCap, Download } from 'lucide-react';

export const Resume: React.FC = () => {
  const experiences = [
    {
      title: 'ML Engineer',
      tag: 'Final Capstone Project',
      period: '2026 - Present',
      description: 'Designed and developed an end-to-end machine learning pipeline for cloudburst risk prediction using meteorological and satellite datasets.'
    },
    {
      title: 'AI Engineer',
      tag: '3rd Year Major Project',
      period: '2025 - 2026',
      description: 'Designed an AI-powered medical document analysis system using OCR + LLMs to extract insights from unstructured PDFs.\nImplemented Retrieval-Augmented Generation (RAG) pipeline with vector embeddings for contextual querying.'
    },
    {
      title: 'Research Assistant',
      tag: 'Research Project',
      period: '2023 - 2026',
      description: 'Conducted research in machine learning, deep learning and computer vision. Drafted full research manuscript (under preparation for submission).'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'CHANDIGARH UNIVERSITY',
      period: '2022 - 2026',
      cgpa: '8.69/10',
      description: 'Focus on AI fundamentals and mathematics. Completed projects in machine learning and deep learning.'
    }
  ];

  const skills = [
    { name: 'Machine Learning', level: 95 },
    { name: 'Deep Learning', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'TensorFlow', level: 70 },
    { name: 'Computer Vision', level: 50 },
    { name: 'NLP', level: 50 }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'SimranjeetKaur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8 pb-4 border-b dark:border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Resume</h1>
        <button 
          onClick={handleDownload}
          className="w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
        >
          <Download size={16} />
          <span>Download CV</span>
        </button>
      </div>
      
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-5 sm:mb-6">
          <Briefcase className="text-amber-500" />
          <h2 className="text-xl sm:text-2xl font-medium">Work Experience</h2>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-medium">{exp.title}</h3>
                <span className="text-amber-500 font-medium">{exp.period}</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-3">{exp.tag}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-5 sm:mb-6">
          <GraduationCap className="text-amber-500" />
          <h2 className="text-xl sm:text-2xl font-medium">Education</h2>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-medium">{edu.degree}</h3>
                <span className="text-amber-500 font-medium">{edu.period}</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-3">{edu.institution}</p>
              <p className="text-amber-500 font-medium mb-3">CGPA: {edu.cgpa}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl sm:text-2xl font-medium mb-5 sm:mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-amber-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};