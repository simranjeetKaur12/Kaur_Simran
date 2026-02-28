import React from 'react';
import { Code } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'About', value: 'about' },
    { name: 'Resume', value: 'resume' },
    { name: 'Projects', value: 'projects' },
    { name: 'Contact', value: 'contact' },
  ];

  React.useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener('navigate', handleNavigation as EventListener);
    return () => window.removeEventListener('navigate', handleNavigation as EventListener);
  }, [setCurrentPage]);

  return (
    <header className="py-4 px-6 bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Code size={24} className="text-amber-500" />
            <span className="font-medium">Simranjeet Kaur</span>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setCurrentPage(item.value)}
                  className={`text-sm ${
                    currentPage === item.value 
                      ? 'text-black dark:text-white font-medium' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};