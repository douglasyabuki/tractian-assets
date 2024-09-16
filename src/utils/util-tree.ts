import { FilterOptionsType, IAsset, ILocation } from "@/interfaces/interfaces";

// Function to build a search key for any asset or location, including nested structures
const buildSearchKey = (locationOrAsset: ILocation | IAsset): string => {
  // Base key includes the id, name, status, and sensorType
  let searchKey = `${locationOrAsset.id} ${locationOrAsset.name}`;

  if ("status" in locationOrAsset && locationOrAsset.status) {
    searchKey += ` ${locationOrAsset.status}`;
  }

  if ("sensorType" in locationOrAsset && locationOrAsset.sensorType) {
    searchKey += ` ${locationOrAsset.sensorType}`;
  }

  // Build keys recursively for components, assets, and locations
  const componentsKey =
    locationOrAsset.components
      ?.map((component) => buildSearchKey(component))
      .join(" ") ?? "";

  const assetsKey = locationOrAsset.assets?.map(buildSearchKey).join(" ") ?? "";

  const locationsKey =
    (locationOrAsset as ILocation).locations?.map(buildSearchKey).join(" ") ??
    "";

  return `${searchKey} ${componentsKey} ${assetsKey} ${locationsKey}`.trim();
};

// Recursive function to map assets
const mapAsset = (
  asset: IAsset,
  componentsLinkedToAsset: IAsset[],
  assetsLinkedToAssets: IAsset[],
  visitedAssets: Set<string>,
): IAsset | null => {
  if (visitedAssets.has(asset.id)) return null;
  visitedAssets.add(asset.id);

  const components = componentsLinkedToAsset.filter(
    (component) => component.parentId === asset.id,
  );
  const nestedAssets = assetsLinkedToAssets.filter(
    (nestedAsset) => nestedAsset.parentId === asset.id,
  );

  const mappedComponents = components.map((component) => ({
    ...component,
    searchKey: buildSearchKey(component),
  }));

  const mappedAssets = nestedAssets
    .map((nestedAsset) =>
      mapAsset(
        nestedAsset,
        componentsLinkedToAsset,
        assetsLinkedToAssets,
        visitedAssets,
      ),
    )
    .filter(Boolean) as IAsset[];

  const combinedSearchKey = buildSearchKey({
    ...asset,
    components: mappedComponents,
    assets: mappedAssets,
  });

  return {
    ...asset,
    searchKey: combinedSearchKey,
    components: mappedComponents,
    assets: mappedAssets,
  };
};

// Recursive function to map sub-locations
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

  const components = componentsLinkedToLocation.filter(
    (component) => component.locationId === subLocation.id,
  );
  const linkedAssets = assetsLinkedToLocations.filter(
    (asset) => asset.locationId === subLocation.id,
  );
  const nestedLocations = remainingLocations.filter(
    (remainingLocation) => remainingLocation.parentId === subLocation.id,
  );

  const mappedComponents = components.map((component) => ({
    ...component,
    searchKey: buildSearchKey(component),
  }));

  const mappedAssets = linkedAssets
    .map((linkedAsset) =>
      mapAsset(
        linkedAsset,
        componentsLinkedToAsset,
        assetsLinkedToAssets,
        visitedAssets,
      ),
    )
    .filter(Boolean) as IAsset[];

  const mappedLocations = nestedLocations
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
    .filter(Boolean) as ILocation[];

  // Build search key including components, assets, and nested locations
  const combinedSearchKey = buildSearchKey({
    ...subLocation,
    components: mappedComponents,
    assets: mappedAssets,
    locations: mappedLocations,
  });

  return {
    ...subLocation,
    searchKey: combinedSearchKey,
    components: mappedComponents,
    assets: mappedAssets,
    locations: mappedLocations,
  };
};

// Main function to map locations, assets, and components with search keys
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

  return mainLocations.map((mainLocation) => {
    const subLocations = remainingLocations
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
      .filter(Boolean) as ILocation[];

    const combinedSearchKey = buildSearchKey({
      ...mainLocation,
      locations: subLocations,
    });

    return {
      ...mainLocation,
      components: componentsLinkedToLocation
        .filter((component) => component.locationId === mainLocation.id)
        .map((component) => ({
          ...component,
          searchKey: buildSearchKey(component),
        })),
      assets: assetsLinkedToLocations
        .filter((asset) => asset.locationId === mainLocation.id)
        .map((mainLocationAsset) =>
          mapAsset(
            mainLocationAsset,
            componentsLinkedToAsset,
            assetsLinkedToAssets,
            visitedAssets,
          ),
        )
        .filter(Boolean) as IAsset[],
      locations: subLocations,
      searchKey: combinedSearchKey,
    };
  });
};

export const filterMappedLocations = (
  mappedLocations: ILocation[],
  filters: FilterOptionsType,
  text: string,
): ILocation[] => {
  const sensorEnergy = filters.sensorEnergy ? "energy" : "";
  const statusAlert = filters.statusAlert ? "alert" : "";
  const normalizedText = text.toLowerCase();

  // Refactor to use searchKey for filtering
  const filterLocations = (locations: ILocation[]): ILocation[] => {
    return locations
      .map((location) => {
        // Filter assets based on searchKey
        const filteredAssets =
          location.assets?.filter(
            (asset: IAsset) =>
              asset.searchKey?.toLowerCase().includes(normalizedText) &&
              asset.searchKey?.toLowerCase().includes(sensorEnergy) &&
              asset.searchKey?.toLowerCase().includes(statusAlert),
          ) ?? [];

        // Filter components based on searchKey
        const filteredComponents =
          location.components?.filter(
            (component: IAsset) =>
              component.searchKey?.toLowerCase().includes(normalizedText) &&
              component.searchKey?.toLowerCase().includes(sensorEnergy) &&
              component.searchKey?.toLowerCase().includes(statusAlert),
          ) ?? [];

        // Recursively filter nested locations
        const filteredNestedLocations = location.locations
          ? filterLocations(location.locations)
          : [];

        // Return filtered location, assets, components, and sub-locations
        return {
          ...location,
          assets: filteredAssets,
          components: filteredComponents,
          locations: filteredNestedLocations,
        };
      })
      .filter((location) => {
        // Only keep locations that have matching assets, components, or nested locations
        return (
          (location.searchKey?.toLowerCase().includes(normalizedText) &&
            location.searchKey?.toLowerCase().includes(sensorEnergy) &&
            location.searchKey?.toLowerCase().includes(statusAlert)) ||
          location.assets.length > 0 ||
          location.components.length > 0 ||
          location.locations.length > 0
        );
      });
  };

  return filterLocations(mappedLocations);
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
