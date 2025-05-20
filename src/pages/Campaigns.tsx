import { useState } from 'react';
import { MainLayout } from "../layouts/MainLayout";
import { useTranslation } from 'react-i18next';

interface Campaign {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  endDate: string;
  badge?: string;
}

export function Campaigns() {
  const { t } = useTranslation();
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  
  const campaigns: Campaign[] = [
    {
      id: "summer-sale",
      title: "Летняя распродажа",
      description: "Скидки до 10% на все квартиры в ЖК «Асылым»",
      fullDescription: "Только этим летом мы предлагаем уникальную возможность приобрести квартиру в жилом комплексе «Асылым» со скидкой до 10%. Акция распространяется на все типы квартир и действует до 31 августа. Не упустите шанс стать владельцем квартиры вашей мечты по выгодной цене!",
      imageUrl: "/Halat.jpg",
      endDate: "31.08.2025",
      badge: "Хит продаж"
    },
    {
      id: "parking-discount",
      title: "Паркинг со скидкой 20%",
      description: "При покупке квартиры в ЖК «Royal Expo»",
      fullDescription: "Предлагаем вам воспользоваться специальным предложением: при покупке квартиры в жилом комплексе «Royal Expo» вы получаете скидку 20% на машиноместо в подземном паркинге. Предложение ограничено и действует только до 30 июня!",
      imageUrl: "/Halat.jpg",
      endDate: "30.06.2025"
    },
    {
      id: "mortgage-special",
      title: "Специальная ипотечная программа",
      description: "Ставка от 5.5% на все объекты",
      fullDescription: "Совместно с банками-партнерами мы разработали специальную ипотечную программу с пониженной процентной ставкой от 5.5% годовых. Программа распространяется на все наши объекты и позволяет значительно снизить ежемесячный платеж по ипотеке. Для получения подробной информации обратитесь к нашим менеджерам.",
      imageUrl: "/Halat.jpg",
      endDate: "31.12.2025"
    },
    {
      id: "first-payment",
      title: "Первоначальный взнос от 10%",
      description: "Для квартир в ЖК «Тоmирис Тауэрс»",
      fullDescription: "Теперь вы можете приобрести квартиру в жилом комплексе «Тоmирис Тауэрс» с первоначальным взносом всего от 10%. Данное предложение действует для всех типов квартир и совместимо с другими акциями нашей компании. Сделайте первый шаг к новой жизни уже сегодня!",
      imageUrl: "/Halat.jpg",
      endDate: "15.07.2025"
    },
    {
      id: "gift-interior",
      title: "Дизайнерский ремонт в подарок",
      description: "При покупке 3-комнатных квартир в ЖК «Триумф»",
      fullDescription: "Эксклюзивное предложение для ценителей комфорта: при покупке 3-комнатной квартиры в жилом комплексе «Триумф» вы получаете дизайнерский ремонт в подарок! Наши специалисты создадут для вас уютное пространство с использованием качественных материалов и современных решений. Количество квартир, участвующих в акции, ограничено.",
      imageUrl: "/Halat.jpg",
      endDate: "30.09.2025",
      badge: "Новинка"
    },
    {
      id: "student-program",
      title: "Программа для студентов",
      description: "Специальные условия покупки для молодежи",
      fullDescription: "Мы разработали специальную программу для молодых людей, которые хотят обрести собственное жилье. Программа предусматривает особые условия оплаты и дополнительные скидки для студентов очной формы обучения. Подробные условия программы вы можете узнать, связавшись с нашими менеджерами.",
      imageUrl: "/Halat.jpg",
      endDate: "01.09.2025"
    }
  ];

  const openPopup = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedCampaign(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-16 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('campaigns.title', 'Акции и специальные предложения')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          {t('campaigns.subtitle', 'Ознакомьтесь с нашими выгодными предложениями и акциями на покупку недвижимости')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard 
              key={campaign.id}
              campaign={campaign}
              onClick={() => openPopup(campaign)}
            />
          ))}
        </div>
      </div>

      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closePopup}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80">
              <img 
                src={selectedCampaign.imageUrl} 
                alt={selectedCampaign.title} 
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                onClick={closePopup}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {selectedCampaign.badge && (
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedCampaign.badge}
                </span>
              )}
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedCampaign.title}</h2>
              <p className="mb-6 text-lg">{selectedCampaign.fullDescription}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Действует до: {selectedCampaign.endDate}</span>
                </div>
                
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md"
                  onClick={() => window.location.href = "#contact"}
                >
                  {t('campaigns.learnMore', 'Узнать подробнее')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

function CampaignCard({ campaign, onClick }: { campaign: Campaign, onClick: () => void }) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative h-56">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title} 
          className="w-full h-full object-cover"
        />
        {campaign.badge && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {campaign.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
        <p className="text-gray-600 mb-4">{campaign.description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            До {campaign.endDate}
          </div>
          <span className="text-blue-600 flex items-center text-sm font-medium">
            Подробнее
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}