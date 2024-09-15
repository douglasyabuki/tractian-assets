import { FilterOptionsType, IAsset, ILocation } from "@/interfaces/interfaces";
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
  const [text, setText] = useState("");

  const components = useMemo(
    () => assets?.filter((item) => item.sensorType),
    [assets],
  );
  const assetsAndSubAssets = useMemo(
    () => assets?.filter((item) => !item.sensorType),
    [assets],
  );

  const filteredUnlinkedAssets = useMemo(() => {
    return assetsAndSubAssets?.filter((item) => {
      const isUnlinked = !item.locationId && !item.parentId;
      const sensorFilter = filters.sensorEnergy
        ? item.sensorType === "energy"
        : true;
      const statusFilter = filters.statusAlert ? item.status === "alert" : true;
      return isUnlinked && sensorFilter && statusFilter;
    });
  }, [assetsAndSubAssets, filters]);

  const filteredUnlinkedComponents = useMemo(() => {
    return components?.filter((component) => {
      const isUnlinked = !component.locationId && !component.parentId;
      const sensorFilter = filters.sensorEnergy
        ? component.sensorType === "energy"
        : true;
      const statusFilter = filters.statusAlert
        ? component.status === "alert"
        : true;
      return isUnlinked && sensorFilter && statusFilter;
    });
  }, [components, filters]);

  const unlinkedAssetsByText = useMemo(() => {
    return filteredUnlinkedAssets?.filter((asset) =>
      asset.name.toLowerCase().includes(text.toLowerCase()),
    );
  }, [filteredUnlinkedAssets, text]);

  const unlinkedComponentsByText = useMemo(() => {
    return filteredUnlinkedComponents?.filter((component) =>
      component.name.toLowerCase().includes(text.toLowerCase()),
    );
  }, [filteredUnlinkedComponents, text]);

  const mappedLocations = useMemo(() => {
    if (!locations) return [];

    const mainLocations = locations.filter((location) => !location.parentId);
    const remainingLocations = locations.filter(
      (location) => !!location.parentId,
    );

    if (!assets) {
      return mainLocations.map((mainLocation) => ({
        ...mainLocation,
        components: [],
        assets: [],
        locations: remainingLocations.filter(
          (remainingLocation) => remainingLocation.parentId === mainLocation.id,
        ),
      }));
    }

    const componentsLinkedToAsset = components.filter(
      (component) => component.parentId,
    );
    const componentsLinkedToLocation = components.filter(
      (component) => component.locationId,
    );
    const assetsLinkedToAssets = assetsAndSubAssets.filter(
      (assetOrSubAsset) => assetOrSubAsset.parentId,
    );
    const assetsLinkedToLocations = assetsAndSubAssets.filter(
      (assetOrSubAsset) => assetOrSubAsset.locationId,
    );

    const visitedLocations = new Set();
    const visitedAssets = new Set();

    const mapSubLocation = (subLocation: ILocation) => {
      if (visitedLocations.has(subLocation.id)) return null;
      visitedLocations.add(subLocation.id);

      return {
        ...subLocation,
        components: componentsLinkedToLocation.filter(
          (component) => component.locationId === subLocation.id,
        ),
        assets: assetsLinkedToLocations
          .filter((asset) => asset.locationId === subLocation.id)
          ?.map((subLocationAsset) => mapAsset(subLocationAsset)),
        locations: remainingLocations
          .filter(
            (remainingLocation) =>
              remainingLocation.parentId === subLocation.id,
          )
          .map(mapSubLocation)
          .filter(Boolean),
      };
    };

    const mapAsset = (asset: IAsset) => {
      if (visitedAssets.has(asset.id)) return null;
      visitedAssets.add(asset.id);

      return {
        ...asset,
        components: componentsLinkedToAsset.filter(
          (componentLinkedToAsset) =>
            componentLinkedToAsset.parentId === asset.id,
        ),
        assets: assetsLinkedToAssets
          .filter(
            (assetLinkedToAsset) => assetLinkedToAsset.parentId === asset.id,
          )
          .map(mapAsset)
          .filter(Boolean),
      };
    };

    return mainLocations.map((mainLocation) => ({
      ...mainLocation,
      components: componentsLinkedToLocation.filter(
        (component) => component.locationId === mainLocation.id,
      ),
      assets: assetsLinkedToLocations
        .filter((asset) => asset.locationId === mainLocation.id)
        ?.map(mapAsset)
        .filter(Boolean),
      locations: remainingLocations
        .filter(
          (remainingLocation) => remainingLocation.parentId === mainLocation.id,
        )
        .map(mapSubLocation)
        .filter(Boolean),
    }));
  }, [locations, assets, components, assetsAndSubAssets]);

  const filteredMappedLocations = useMemo(() => {
    if (text === "" && !filters.sensorEnergy && !filters.statusAlert) {
      return mappedLocations;
    }

    const filterLocations = (locations: ILocation[]): ILocation[] => {
      return locations
        .map((location) => {
          const filteredAssets = location?.assets?.filter((asset: IAsset) => {
            return (
              (filters.sensorEnergy && asset.sensorType === "energy") ||
              (filters.statusAlert && asset.status === "alert") ||
              asset.name.toLowerCase().includes(text.toLowerCase())
            );
          });

          const filteredComponents = location?.components?.filter(
            (component: IAsset) =>
              (filters.sensorEnergy && component.sensorType === "energy") ||
              (filters.statusAlert && component.status === "alert") ||
              component.name.toLowerCase().includes(text.toLowerCase()),
          );

          return {
            ...location,
            assets: filteredAssets ? filteredAssets : [],
            components: filteredComponents ? filteredComponents : [],
            locations: location.locations
              ? filterLocations(location.locations)
              : [],
          };
        })
        .filter((location) => {
          return (
            location.assets.length > 0 ||
            location.components.length > 0 ||
            location.locations.length > 0 ||
            location.name.toLowerCase().includes(text.toLowerCase())
          );
        });
    };

    return filterLocations(mappedLocations);
  }, [text, filters, mappedLocations]);

  return (
    <aside className="box-border flex w-[30rem] flex-col divide-y-[1px] divide-slate-600 border-[1.5px] border-slate-600 bg-slate-800/90">
      <SearchBar
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        disabled={false}
        placeholder="Buscar ativo ou local"
      />
      <ViewTree
        locations={filteredMappedLocations}
        unlinkedAssets={unlinkedAssetsByText}
        unlinkedComponents={unlinkedComponentsByText}
      />
    </aside>
  );
};
