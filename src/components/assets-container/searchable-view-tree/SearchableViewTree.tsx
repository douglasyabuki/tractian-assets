import { useDebounce } from "@/hooks/use-debounce";
import { FilterOptionsType, IAsset, ILocation } from "@/interfaces/interfaces";
import {
  filterComponentsByText,
  filterComponentsByTypeAndStatus,
  filterMappedLocations,
  filterMappedLocationsByText,
  mapLocations,
} from "@/utils/util-tree";
import { useMemo, useState } from "react";
import { SearchBar } from "./search-bar/SearchBar";
import { ViewTree } from "./view-tree/ViewTree";

interface SearchableViewTreeProps {
  assets: IAsset[];
  locations: ILocation[];
  filters: FilterOptionsType;
}

export const SearchableViewTree = ({
  assets,
  locations,
  filters,
}: SearchableViewTreeProps) => {
  const [text, setText] = useState<string>("");
  const debouncedText = useDebounce(text, 300);

  const filteredComponents = useMemo(
    () =>
      filterComponentsByTypeAndStatus(
        assets.filter((item) => item.sensorType),
        filters,
      ),
    [assets, filters],
  );

  const assetsAndSubAssets = useMemo(
    () => assets.filter((item) => !item.sensorType),
    [assets],
  );

  const mappedLocations = useMemo(() => {
    return mapLocations(locations, assetsAndSubAssets, filteredComponents);
  }, [locations, assetsAndSubAssets, filteredComponents]);

  const unlinkedAssets = useMemo(
    () =>
      assetsAndSubAssets.filter(
        (asset) => !asset.locationId && !asset.parentId,
      ),
    [assetsAndSubAssets],
  );

  const unlinkedComponents = useMemo(
    () =>
      filteredComponents.filter(
        (component) => !component.locationId && !component.parentId,
      ),
    [filteredComponents],
  );

  const filteredMappedLocations = useMemo(() => {
    return filterMappedLocations(mappedLocations, filters);
  }, [mappedLocations, filters]);

  const matchingFilteredMappedLocations = useMemo(() => {
    return filterMappedLocationsByText(filteredMappedLocations, debouncedText);
  }, [filteredMappedLocations, debouncedText]);

  const filteredUnlinkedAssets = useMemo(() => {
    return filters.sensorEnergy || filters.statusAlert ? [] : unlinkedAssets;
  }, [unlinkedAssets, filters]);

  const filteredUnlinkedAssetsByText = useMemo(() => {
    return filteredUnlinkedAssets.filter(
      (item) =>
        item.name.toLowerCase().includes(debouncedText) ||
        item.id.toLowerCase().includes(debouncedText),
    );
  }, [filteredUnlinkedAssets, debouncedText]);

  const filteredUnlinkedComponentsByText = useMemo(
    () => filterComponentsByText(unlinkedComponents, debouncedText),
    [unlinkedComponents, debouncedText],
  );

  return (
    <aside className="box-border flex h-full w-full flex-col divide-y-[1px] divide-slate-600 border-[1.5px] border-slate-600 bg-slate-800/90 md:h-auto md:w-[30rem]">
      <SearchBar
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        disabled={false}
        placeholder="Buscar ativo ou local"
      />
      <ViewTree
        locations={matchingFilteredMappedLocations}
        unlinkedAssets={filteredUnlinkedAssetsByText}
        unlinkedComponents={filteredUnlinkedComponentsByText}
      />
    </aside>
  );
};
