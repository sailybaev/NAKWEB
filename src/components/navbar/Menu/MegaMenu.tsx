import { MegaMenuItems } from "../types";
import { useTranslation } from 'react-i18next';
import { residentialComplexes } from '../../residential/residentialConfig';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  isOpen: boolean;
  items: MegaMenuItems;
  isMobile?: boolean;
}

export function MegaMenu({ isOpen, isMobile = false }: MegaMenuProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  // Get the 6 most recent projects based on completionDate (newest first)
  const recentProjects = [...residentialComplexes]
    .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())
    .slice(0, 6);

  if (isMobile) {
    return (
      <div className="mt-2 px-4">
        <div className="grid grid-cols-1 gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          {/* Recent Projects Section for Mobile */}
          <div>
            <h3 className="font-bold mb-2 text-lg">{t('housing.recentProjects')}</h3>
            <ul className="grid grid-cols-1 gap-2">
              {recentProjects.map(project => (
                <li key={project.id}>
                  <Link 
                    to={`/residential/${project.id}`} 
                    className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="w-12 h-12 mr-3 overflow-hidden rounded">
                      <img 
                        src={project.imageUrl} 
                        alt={project.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-medium block">{project.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.address}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="mega-menu" className="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <div className="max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6">
        {/* Recent Projects Section */}
        <div>
          <h3 className="font-bold mb-3 border-b pb-2 border-gray-200 dark:border-gray-700">
            {t('housing.recentProjects')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentProjects.map(project => (
              <Link 
                key={project.id}
                to={`/residential/${project.id}`} 
                className="block rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm">{project.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{project.address}</p>
                  <div className="text-xs mt-2 text-blue-600 dark:text-blue-400">
                    {t('housing.fromPrice', { price: project.minPrice })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}