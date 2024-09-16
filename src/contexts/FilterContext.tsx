import { FilterOptionsType } from "@/interfaces/interfaces";
import { createContext, useState } from "react";

interface FilterContextProps {
  filters: FilterOptionsType;
  toggleFilter: (filter: keyof FilterOptionsType) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  filters: { sensorEnergy: false, statusAlert: false },
  toggleFilter: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<FilterOptionsType>({
    sensorEnergy: false,
    statusAlert: false,
  });

  const toggleFilter = (filter: keyof FilterOptionsType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <FilterContext.Provider value={{ filters, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
