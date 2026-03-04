import React from 'react';
import { Code, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  return (
    <header className="py-4 px-4 sm:px-6 bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Code size={22} className="text-amber-500" />
            <span className="font-medium text-sm sm:text-base">Simranjeet Kaur</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-4 lg:gap-6">
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

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-1 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-left px-3 py-2 rounded-md text-sm ${
                  currentPage === item.value
                    ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-medium'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};