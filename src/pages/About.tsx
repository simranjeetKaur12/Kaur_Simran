import React from 'react';
import { Brain, Code, Database, LineChart } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { 
      icon: <Brain className="w-8 h-8 text-amber-500" />, 
      title: 'Machine Learning', 
      description: 'Expertise in developing and deploying ML models using PyTorch, TensorFlow, and scikit-learn.' 
    },
    { 
      icon: <Code className="w-8 h-8 text-rose-500" />, 
      title: 'AI Development', 
      description: 'Building scalable AI solutions and implementing deep learning architectures.' 
    },
    { 
      icon: <Database className="w-8 h-8 text-teal-500" />, 
      title: 'Database & MLOps', 
      description: 'Experience with SQL/NoSQL databases and implementing MLOps practices for model deployment and monitoring.' 
    },
    { 
      icon: <LineChart className="w-8 h-8 text-purple-500" />, 
      title: 'System Design', 
      description: 'Designing end-to-end AI systems and optimizing performance for real-world applications.' 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-4 border-b dark:border-gray-700">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-xl font-medium mb-4">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I’m a final-year Computer Science student who genuinely enjoys solving complex problems and understanding how systems work under the hood. Beyond academics, I’ve always been curious about how data can be transformed into meaningful insights.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I would describe myself as someone who values clarity, structured thinking, and continuous improvement. I spend a lot of time strengthening my fundamentals in data structures and system design because I believe strong foundations create long-term impact.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            What motivates me most is building things that are not just functional but scalable and meaningful. I’m currently at a stage where I’m actively learning, experimenting, and pushing myself to think like an engineer rather than just a student.
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden h-100">
          <img 
            src="aboutphoto.jpeg" 
            alt="AI Development" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-medium mb-8">My Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-medium mb-2">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};