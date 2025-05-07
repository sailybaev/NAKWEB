import React, { useState } from 'react';
import { Dropdown } from '../ui/Dropdown';
import { OptionList } from '../ui/OptionList';
import { PriceRange } from '../ui/PriceRange';

interface FilterBarProps {
  buildingType: string;
  setBuildingType: (type: string) => void;
  propertyType: string;
  setPropertyType: (type: string) => void;
}

export function FilterBar({ buildingType, setBuildingType, propertyType, setPropertyType }: FilterBarProps) {

  const [buildingTypeDropdown, setBuildingTypeDropdown] = useState(false);
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const buildingTypes = ['Все проекты', 'Строющиеся', 'Готовые'];
  const propertyTypes = [ 'Все','Квартира', 'Коммерческая недвижимость', 'Паркинг'];

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
    setBuildingType('Все проекты');
    setPropertyType('Все');
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
              label="Цена"
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
            Сбросить
          </button>
        </div>
      </div>
  );
}