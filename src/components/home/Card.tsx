import { useTranslation } from 'react-i18next';

interface CardProps {
  imgloc: string;
}

export function Card({ imgloc }: CardProps) {
  const { t } = useTranslation();
  
  return (
    <div 
      className="h-full bg-gray-900 p-6 rounded-lg flex flex-col justify-between shadow-lg relative overflow-hidden" 
      style={{ 
        width: '100%', 
        height: '500px',
        backgroundImage: `url(${imgloc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      
      
      
      <button className="relative bottom w-full bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 text-center font-medium">
        Подробнее
      </button>
    </div>
  );
}