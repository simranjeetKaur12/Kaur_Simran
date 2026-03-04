import React from 'react';
import { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Certifications } from './pages/Certifications';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { RightSidebar } from './components/RightSidebar';
import { MobileSocialBar } from './components/MobileSocialBar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col relative text-gray-900 dark:text-gray-100 transition-colors">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Sidebar />
        <RightSidebar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 sm:pb-8">
          {renderPage()}
        </main>
        <MobileSocialBar />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;