import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-220px)] flex items-center py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-square rounded-full overflow-hidden justify-self-center">
          <img 
            src="/images/picture.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <TypeAnimation
              sequence={[
                1000,
                'Hello, I am Simran',
                1000,
                'AI & ML Enthusiast',
                1000,
                'Welcome to my Portfolio',
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-amber-500"
            />
          </h1>
          
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">A Bit About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-4">
              Final-year Computer Science student building intelligent systems with real-world impact. Currently developing a Cloudburst Risk Estimation System using machine learning, satellite data, and predictive modeling. Passionate about scalable AI, system design, and solving high-impact environmental problems.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button 
              onClick={() => setCurrentPage('resume')}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
            >
              Resume
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}