import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

export function LanguageSwitcher({ isMobile = false }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const getLanguageDisplay = (code: string) => {
    switch(code) {
      case 'kz': return 'KZ';
      case 'ru': return 'RU';
      case 'en': return 'EN';
      default: return code.toUpperCase();
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="py-2 border-t border-gray-200 dark:border-gray-700 mt-3">
        <div className="flex flex-col space-y-2">
          <div className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">
            {t('language', 'Language')}
          </div>
          <div className="flex space-x-2 px-3">
            <button 
              className={`px-3 py-1 text-sm rounded ${i18n.language === 'kz' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-white'}`}
              onClick={() => changeLanguage('kz')}
            >
              KZ
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded ${i18n.language === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-white'}`}
              onClick={() => changeLanguage('ru')}
            >
              RU
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-white'}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center px-3 py-1.5 text-sm rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getLanguageDisplay(i18n.language)}</span>
        <svg 
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white shadow-lg rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white py-1 w-24 z-10">
          <button 
            className={`w-full text-left px-3 py-1.5 text-sm ${i18n.language === 'kz' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => changeLanguage('kz')}
          >
            KZ
          </button>
          <button 
            className={`w-full text-left px-3 py-1.5 text-sm ${i18n.language === 'ru' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => changeLanguage('ru')}
          >
            RU
          </button>
          <button 
            className={`w-full text-left px-3 py-1.5 text-sm ${i18n.language === 'en' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}