import React from 'react';
import { BookOpen, Award, Youtube, Mail } from 'lucide-react';

export const RightSidebar: React.FC = () => {
  const links = [
    { 
      name: 'Blog', 
      icon: <BookOpen size={20} />, 
      url: 'https://medium.com/@simrankhalsa0812',
      color: 'hover:bg-black hover:text-white',
      external: true
    },
    { 
      name: 'Certifications', 
      icon: <Award size={20} />, 
      url: '#',
      color: 'hover:bg-blue-600 hover:text-white',
      external: false,
      onClick: () => setCurrentPage('certifications')
    },
    { 
      name: 'YouTube', 
      icon: <Youtube size={20} />, 
      url: 'https://www.youtube.com/watch?v=your-video-id',
      color: 'hover:bg-red-600 hover:text-white',
      external: true
    },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      url: 'mailto:simrankhalsa0812@gmail.com',
      color: 'hover:bg-teal-600 hover:text-white',
      external: false
    }
  ];

  const setCurrentPage = (page: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
      <div className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : ''}
            onClick={link.onClick ? (e) => {
              e.preventDefault();
              link.onClick?.();
            } : undefined}
            className={`p-3 bg-white dark:bg-gray-800 shadow-md rounded-l-md transition-all duration-300 flex items-center group text-gray-700 dark:text-gray-300 ${link.color}`}
            aria-label={link.name}
          >
            <div className="flex items-center">
              {link.icon}
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-300 ease-in-out whitespace-nowrap">
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};