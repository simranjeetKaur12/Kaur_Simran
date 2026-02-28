import React from 'react';
import { Phone, Mail, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm mt-auto transition-colors">
      <div className="container mx-auto py-8 px-4 md:px-20 md:pl-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pl-16">
          <div className="flex items-start gap-4">
            <Phone className="text-amber-500 shrink-0" size={20} />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+91 9877544295</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-amber-500 shrink-0" size={20} />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">simrankhalsa0812@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="text-amber-500 shrink-0" size={20} />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Follow Me</h3>
              <p className="text-gray-600 dark:text-gray-400">https://www.linkedin.com/in/simranjeet-kaur0812/</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Simranjeet Kaur • Built with React and TailwindCSS
        </div>
      </div>
    </footer>
  );
};