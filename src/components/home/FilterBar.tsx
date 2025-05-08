import React, { useState } from 'react';
import { Dropdown } from '../ui/Dropdown';
import { OptionList } from '../ui/OptionList';
import { PriceRange } from '../ui/PriceRange';
import { useTranslation } from 'react-i18next';

interface FilterBarProps {
  buildingType: string;
  setBuildingType: (type: string) => void;
  propertyType: string;
  setPropertyType: (type: string) => void;
}

export function FilterBar({ buildingType, setBuildingType, propertyType, setPropertyType }: FilterBarProps) {
  const { t } = useTranslation();
  const [buildingTypeDropdown, setBuildingTypeDropdown] = useState(false);
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const buildingTypes = [
    t('home.projects.filters.allProjects'), 
    t('home.projects.filters.underConstruction'), 
    t('home.projects.filters.completed')
  ];
  
  const propertyTypes = [
    t('home.projects.filters.all'),
    t('home.projects.filters.apartment'), 
    t('home.projects.filters.commercial'), 
    t('home.projects.filters.parking')
  ];

  const closeAllDropdowns = (except: string) => {
    if (except !== 'buildingType') setBuildingTypeDropdown(false);
    if (except !== 'propertyType') setPropertyTypeDropdown(false);
    if (except !== 'price') setPriceDropdown(false);
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

  const resetFilters = () => {
    setBuildingType(t('home.projects.filters.allProjects'));
    setPropertyType(t('home.projects.filters.all'));
    setMinPrice('');
    setMaxPrice('');
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