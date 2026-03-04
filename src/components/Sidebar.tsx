import React from 'react';
import { Github, Code2, LineChart, Linkedin } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      url: 'https://github.com/simranjeetKaur12',
      color: 'hover:bg-gray-800 hover:text-white'
    },
    { 
      name: 'LeetCode', 
      icon: <Code2 size={20} />, 
      url: 'https://leetcode.com/u/Simran_0812/',
      color: 'hover:bg-amber-500 hover:text-white'
    },
    { 
      name: 'Kaggle', 
      icon: <LineChart size={20} />, 
      url: 'https://www.kaggle.com/simrankhalsa431',
      color: 'hover:bg-blue-500 hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://www.linkedin.com/in/simranjeet-kaur0812/',
      color: 'hover:bg-blue-700 hover:text-white'
    }
  ];

  return (
    <div className="hidden xl:block fixed left-0 top-1/2 transform -translate-y-1/2 z-10">
      <div className="flex flex-col space-y-2">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 2xl:p-3 bg-white dark:bg-gray-800 shadow-md rounded-r-md transition-all duration-300 flex items-center group text-gray-700 dark:text-gray-300 ${link.color}`}
            aria-label={link.name}
          >
            <div className="flex items-center">
              {link.icon}
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap">
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};