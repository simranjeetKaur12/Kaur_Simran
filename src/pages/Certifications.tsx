import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Microsoft Certified:Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'july 2024',
      credentialId: '743A859353AABE44',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      url: 'https://learn.microsoft.com/en-us/users/simranjeetkaur-8204/credentials/certification/azure-ai-fundamentals?tab=credentials-tab'
    },
    {
      title: 'Applied Machine Learning in Python',
      issuer: 'University of Michigan (Coursera)',
      date: 'November 2024',
      credentialId: 'G378E8XZOQ6U',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: 'https://www.coursera.org/account/accomplishments/certificate/G378E8XZOQ6U'
    },
    {
      title: 'Python for Everybody',
      issuer: 'University of Michigan (Coursera)',
      date: 'October 2023',
      credentialId: 'YXEMV8CP4PNF',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/YXEMV8CP4PNF'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b dark:border-gray-700">
        <Award className="w-8 h-8 text-amber-500" />
        <h1 className="text-3xl font-bold">My Certifications</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-48 overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2">{cert.title}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: {cert.date}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Credential ID: {cert.credentialId}</p>
              </div>
              
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors"
              >
                <span>Verify Certificate</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};