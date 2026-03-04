import React from 'react';
import { Github, Code2, LineChart, Linkedin, BookOpen, Award, Mail } from 'lucide-react';

export const MobileSocialBar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollYRef = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      if (Math.abs(currentScrollY - lastScrollY) < 8) {
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCertifications = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'certifications' }));
  };

  const items = [
    {
      name: 'GitHub',
      icon: <Github size={18} />,
      href: 'https://github.com/simranjeetKaur12',
      external: true,
    },
    {
      name: 'LeetCode',
      icon: <Code2 size={18} />,
      href: 'https://leetcode.com/u/Simran_0812/',
      external: true,
    },
    {
      name: 'Kaggle',
      icon: <LineChart size={18} />,
      href: 'https://www.kaggle.com/simrankhalsa431',
      external: true,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      href: 'https://www.linkedin.com/in/simranjeet-kaur0812/',
      external: true,
    },
    {
      name: 'Blog',
      icon: <BookOpen size={18} />,
      href: 'https://medium.com/@simrankhalsa0812',
      external: true,
    },
    {
      name: 'Certifications',
      icon: <Award size={18} />,
      action: openCertifications,
      external: false,
    },
    {
      name: 'Email',
      icon: <Mail size={18} />,
      href: 'mailto:simrankhalsa0812@gmail.com',
      external: false,
    },
  ];

  return (
    <div
      className={`sm:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-1rem)] max-w-md transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <div className="bg-amber-500 backdrop-blur border border-amber-500 dark:border-amber-500 rounded-full shadow-lg px-2 py-1.5">
        <div className="flex items-center justify-center gap-1">
          {items.map((item) => {
            if (item.action) {
              return (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="shrink-0 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </button>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="shrink-0 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
