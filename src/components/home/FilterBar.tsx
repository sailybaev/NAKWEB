import React, { useState } from 'react';
import { Dropdown } from '../ui/Dropdown';
import { OptionList } from '../ui/OptionList';
import { PriceRange } from '../ui/PriceRange';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '../ui/Tooltip';

interface FilterBarProps {
  buildingType: string;
  setBuildingType: (type: string) => void;
  propertyType: string;
  setPropertyType: (type: string) => void;
  minPrice: string;
  maxPrice: string;
  setMinPrice: (value: string) => void;
  setMaxPrice: (value: string) => void;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
  classType: string;            
  setClassType: (type: string) => void;  
}

export function FilterBar({ 
  buildingType, 
  setBuildingType, 
  propertyType, 
  setPropertyType,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  inStockOnly,
  setInStockOnly,
  classType,          
  setClassType          
}: FilterBarProps) {
  const { t } = useTranslation();
  const [buildingTypeDropdown, setBuildingTypeDropdown] = useState(false);
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [classDropdown, setClassDropdown] = useState(false);  

  const buildingTypes = [
    t('home.projects.filters.allProjects'), 
    t('home.projects.filters.underConstruction'), 
    t('home.projects.filters.completed')
  ];
  
  const propertyTypes = [
    t('home.projects.filters.all'),
    t('home.projects.filters.apartment'), 
    t('home.projects.filters.commercial'), 
    t('home.projects.filters.parking'),
    t('home.projects.filters.storage')
  ];

  const classTypes = [
    t('home.projects.filters.allClasses'),
    t('home.projects.filters.economy'), 
    t('home.projects.filters.comfort'),
    t('home.projects.filters.comfortPlus'), 
    t('home.projects.filters.business'),
    t('home.projects.filters.premium'),
    
  ];

  const closeAllDropdowns = (except: string) => {
    if (except !== 'buildingType') setBuildingTypeDropdown(false);
    if (except !== 'propertyType') setPropertyTypeDropdown(false);
    if (except !== 'price') setPriceDropdown(false);
    if (except !== 'class') setClassDropdown(false); 
  };

  const handleBuildingTypeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBuildingTypeDropdown(!buildingTypeDropdown);
    closeAllDropdowns('buildingType');
  };

  const handlePropertyTypeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPropertyTypeDropdown(!propertyTypeDropdown);
    closeAllDropdowns('propertyType');
  };

  const handlePriceToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPriceDropdown(!priceDropdown);
    closeAllDropdowns('price');
  };

  const handleClassToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClassDropdown(!classDropdown);
    closeAllDropdowns('class');
  };

  const resetFilters = () => {
    setBuildingType(t('home.projects.filters.allProjects'));
    setPropertyType(t('home.projects.filters.all'));
    setMinPrice('');
    setMaxPrice('');
    setInStockOnly(false);
    setClassType(t('home.projects.filters.allClasses'));
  };

  return (
      <div className="mb-6" onClick={() => closeAllDropdowns('')}>
        <div className="flex flex-wrap gap-3 mb-4">
          <Dropdown
              isOpen={buildingTypeDropdown}
              toggle={handleBuildingTypeToggle}
              label={buildingType}
              active={buildingTypeDropdown}
              variant="primary"
          >
            <OptionList
                options={buildingTypes}
                selectedValue={buildingType}
                onSelect={(value) => {
                  setBuildingType(value);
                  setBuildingTypeDropdown(false);
                }}
            />
          </Dropdown>

          <Dropdown
              isOpen={propertyTypeDropdown}
              toggle={handlePropertyTypeToggle}
              label={propertyType}
              active={propertyTypeDropdown}
              variant="primary"
          >
            <OptionList
                options={propertyTypes}
                selectedValue={propertyType}
                onSelect={(value) => {
                  setPropertyType(value);
                  setPropertyTypeDropdown(false);
                }}
            />
          </Dropdown>

          <Dropdown
              isOpen={priceDropdown}
              toggle={handlePriceToggle}
              label={t('home.projects.filters.price')}
              active={priceDropdown}
              variant="secondary"
          >
            <PriceRange
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                onApply={() => setPriceDropdown(false)}
            />
          </Dropdown>

          <Dropdown
              isOpen={classDropdown}
              toggle={handleClassToggle}
              label={classType}
              active={classDropdown}
              variant="primary"
          >
            <OptionList
                options={classTypes}
                selectedValue={classType}
                onSelect={(value) => {
                  setClassType(value);
                  setClassDropdown(false);
                }}
            />
          </Dropdown>

          <div className="flex items-center" data-filter-key="in-stock-container">
            <Tooltip content={t('home.projects.filters.inStockTooltip')}>
              <label className="inline-flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    data-testid="in-stock-toggle"
                  />
                  <div className={`w-12 h-6 rounded-full transition-colors duration-300 ease-in-out flex items-center px-1 ${inStockOnly ? 'bg-blue-600' : 'bg-gray-300'}`}>
                    <div 
                      className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${inStockOnly ? 'translate-x-6' : 'translate-x-0'}`}
                    ></div>
                  </div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  {t('home.projects.filters.inStock')}
                </span>
              </label>
            </Tooltip>
          </div>

          <button
              className="text-gray-500 py-2 px-4 hover:text-gray-700"
              onClick={resetFilters}
          >
            {t('home.projects.filters.reset')}
          </button>
        </div>
      </div>
  );
}

