import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const categories = ['All', 'Machine Learning', 'Computer Vision', 'NLP', 'RAG'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: 'Cloudburst Risk Estimation System',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Built a machine learning-based risk prediction system using meteorological and satellite datasets to estimate potential cloudburst events',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Analysis'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/simranjeetKaur12/CloudBurst-Risk-Estimation-System'
      }
    },
    {
      title: 'ClinIQ: AI-Powered Medical Document Analysis',
      category: 'RAG',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Developed a Retrieval-Augmented Generation (RAG) based system for analyzing and extracting insights from medical documents. Integrated document embeddings, vector search, and LLM responses for contextual question answering.',
      tags: ['RAG', 'LLM', 'Vector Database', 'NLP'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/simranjeetKaur12/ClinIQ-AI'
      }
    },
    {
      title: 'DeepPlateNet: License Plate Recognition',
      category: 'Computer Vision',
      image: 'licenseplate.jpg',
      description: 'Analyze the performance of various models for license plate recognition such as CNN, R-CNN, tesseract and easyOCR',
      tags: ['Computer Vision', 'YOLO', 'OpenCV', 'Python'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/simranjeetKaur12/DeepPlateNet'
      }
    },
    {
      title: 'AI Chatbot for Sentiment Analysis',
      category: 'NLP',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Built an NLP-based chatbot capable of performing real-time sentiment analysis using transformer-based models.',
      tags: ['NLP', 'Transformers', 'Python', 'Sentiment Analysis'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/simranjeetKaur12/AI-ChatBot'
      }
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-4 border-b dark:border-gray-700">My Projects</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md ${
              activeCategory === category
                ? 'bg-rose-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            } transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-200 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
                
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};