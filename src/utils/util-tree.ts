import { FilterOptionsType, IAsset, ILocation } from "@/interfaces/interfaces";

export const filterAssetsByComponentExistence = (assets: IAsset[]): IAsset[] => {
  return assets.filter((asset) => {
    if (asset.components && asset.components.length > 0) {
      return true;
    }
    if (asset.assets && asset.assets.length > 0) {
      return filterAssetsByComponentExistence(asset.assets).length > 0;
    }
    return false;
  });
};

export const filterComponentsByTypeAndStatus = (
  components: IAsset[],
  filters: FilterOptionsType,
): IAsset[] => {
  return components.filter((component) => {
    const sensorFilter = filters.sensorEnergy
      ? component.sensorType === "energy"
      : true;
    const statusFilter = filters.statusAlert
      ? component.status === "alert"
      : true;
    return sensorFilter && statusFilter;
  });
};

export const filterComponentsByText = (
  components: IAsset[],
  text: string,
): IAsset[] => {
  return components.filter((component) => {
    return (
      component.name?.toLowerCase().includes(text) ||
      component.id?.toLowerCase().includes(text)
    );
  });
};

// Function to map assets and components within an asset
const mapAsset = (
  asset: IAsset,
  componentsLinkedToAsset: IAsset[],
  assetsLinkedToAssets: IAsset[],
  visitedAssets: Set<string>,
): IAsset | null => {
  if (visitedAssets.has(asset.id)) return null;
  visitedAssets.add(asset.id);

  return {
    ...asset,
    // Components linked to this asset
    components: componentsLinkedToAsset.filter(
      (component) => component.parentId === asset.id,
    ),
    // Sub-assets linked to this asset
    assets: assetsLinkedToAssets
      .filter((assetLinkedToAsset) => assetLinkedToAsset.parentId === asset.id)
      .map((subAsset) =>
        mapAsset(
          subAsset,
          componentsLinkedToAsset, // Ensure components linked to sub-assets
          assetsLinkedToAssets,
          visitedAssets,
        ),
      )
      .filter(Boolean) as IAsset[], // Make sure we filter out nulls
  };
};

// Function to map sub-locations, assets, and components within a location
const mapSubLocation = (
  subLocation: ILocation,
  componentsLinkedToLocation: IAsset[],
  assetsLinkedToLocations: IAsset[],
  remainingLocations: ILocation[],
  componentsLinkedToAsset: IAsset[],
  assetsLinkedToAssets: IAsset[],
  visitedLocations: Set<string>,
  visitedAssets: Set<string>,
): ILocation | null => {
  if (visitedLocations.has(subLocation.id)) return null;
  visitedLocations.add(subLocation.id);

  return {
    ...subLocation,
    // Components linked to this location
    components: componentsLinkedToLocation.filter(
      (component) => component.locationId === subLocation.id,
    ),
    // Assets linked to this location
    assets: assetsLinkedToLocations
      .filter((asset) => asset.locationId === subLocation.id)
      .map((subLocationAsset) =>
        mapAsset(
          subLocationAsset,
          componentsLinkedToAsset, // Components linked to this asset
          assetsLinkedToAssets,
          visitedAssets,
        ),
      )
      .filter(Boolean) as IAsset[], // Ensure type consistency
    // Sub-locations within this location
    locations: remainingLocations
      .filter(
        (remainingLocation) => remainingLocation.parentId === subLocation.id,
      )
      .map((nestedLocation) =>
        mapSubLocation(
          nestedLocation,
          componentsLinkedToLocation,
          assetsLinkedToLocations,
          remainingLocations,
          componentsLinkedToAsset,
          assetsLinkedToAssets,
          visitedLocations,
          visitedAssets,
        ),
      )
      .filter(Boolean) as ILocation[], // Ensure type consistency
  };
};

// Function to map locations, assets, and components
export const mapLocations = (
  locations: ILocation[],
  assets: IAsset[],
  components: IAsset[],
): ILocation[] => {
  const mainLocations = locations.filter((location) => !location.parentId);
  const remainingLocations = locations.filter(
    (location) => !!location.parentId,
  );

  const componentsLinkedToLocation = components.filter(
    (component) => component.locationId,
  );
  const componentsLinkedToAsset = components.filter(
    (component) => component.parentId,
  );

  const assetsLinkedToLocations = assets.filter((asset) => asset.locationId);
  const assetsLinkedToAssets = assets.filter((asset) => asset.parentId);

  const visitedLocations = new Set<string>();
  const visitedAssets = new Set<string>();

  return mainLocations.map((mainLocation) => ({
    ...mainLocation,
    // Components linked to this main location
    components: componentsLinkedToLocation.filter(
      (component) => component.locationId === mainLocation.id,
    ),
    // Assets linked to this main location
    assets: assetsLinkedToLocations
      .filter((asset) => asset.locationId === mainLocation.id)
      .map((mainLocationAsset) =>
        mapAsset(
          mainLocationAsset,
          componentsLinkedToAsset, // Ensure components linked to this asset
          assetsLinkedToAssets,
          visitedAssets,
        ),
      )
      .filter(Boolean) as IAsset[], // Ensure type consistency
    // Sub-locations within this main location
    locations: remainingLocations
      .filter(
        (remainingLocation) => remainingLocation.parentId === mainLocation.id,
      )
      .map((subLocation) =>
        mapSubLocation(
          subLocation,
          componentsLinkedToLocation,
          assetsLinkedToLocations,
          remainingLocations,
          componentsLinkedToAsset,
          assetsLinkedToAssets,
          visitedLocations,
          visitedAssets,
        ),
      )
      .filter(Boolean) as ILocation[], // Ensure type consistency
  }));
};

// Function to filter mapped locations based on search text and filters
export const filterMappedLocations = (
  mappedLocations: ILocation[],
  filters: FilterOptionsType,
  text: string,
): ILocation[] => {
  const filterLocations = (locations: ILocation[]): ILocation[] => {
    return locations
      .map((location) => {
        console.log({ location, filters, text });
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
          assets: filteredAssets ?? [],
          components: filteredComponents ?? [],
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
};
