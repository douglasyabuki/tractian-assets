import { IAsset, ILocation } from "@/interfaces/interfaces";
import { useMemo } from "react";
import { Location } from "./location/Location";
import { TreeNode } from "./tree-node/TreeNode";

interface ViewTreeProps {
  locations: ILocation[];
  assets: IAsset[];
  onComponentSelect: (component: IAsset) => void;
}

export const ViewTree = ({
  locations,
  assets,
  onComponentSelect,
}: ViewTreeProps) => {
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

    const components = assets.filter((item) => item.sensorType);
    const componentsLinkedToAsset = components.filter(
      (component) => component.parentId,
    );
    const componentsLinkedToLocation = components.filter(
      (component) => component.locationId,
    );
    const assetsAndSubAssets = assets.filter(
      (assetOrSubAsset) => !assetOrSubAsset.sensorType,
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
  }, [locations, assets]);

  const components = useMemo(() => {
    return assets?.filter((item) => item.sensorType);
  }, [assets]);

  const assetsAndSubAssets = useMemo(() => {
    return assets?.filter((item) => !item.sensorType);
  }, [assets]);

  // UNLINKED
  const unlinkedAssets = useMemo(() => {
    return assetsAndSubAssets?.filter(
      (item) => !item.locationId && !item.parentId,
    );
  }, [assetsAndSubAssets]);

  const unlinkedComponents = useMemo(() => {
    return components?.filter(
      (component) => !component.locationId && !component.parentId,
    );
  }, [components]);

  return (
    <aside className="flex flex-col overflow-y-scroll">
      <div className="flex min-h-fit flex-col">
        {mappedLocations?.map((mappedLocation) => (
          <Location
            key={mappedLocation.id}
            onComponentSelect={onComponentSelect}
            {...mappedLocation}
          />
        ))}

        {unlinkedAssets?.length > 0 && (
          <TreeNode
            title="Unlinked Assets"
            items={unlinkedAssets}
            onComponentSelect={onComponentSelect}
          />
        )}

        {unlinkedComponents?.length > 0 && (
          <TreeNode
            title="Unlinked Components"
            items={unlinkedComponents}
            onComponentSelect={onComponentSelect}
          />
        )}
      </div>
    </aside>
  );
};
