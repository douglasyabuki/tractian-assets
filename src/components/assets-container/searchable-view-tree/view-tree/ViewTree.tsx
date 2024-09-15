import { IAsset, ILocation } from "@/interfaces/interfaces";
import { TreeNode } from "./tree-node/TreeNode";

interface ViewTreeProps {
  locations: ILocation[];
  unlinkedAssets?: IAsset[];
  unlinkedComponents?: IAsset[];
}

export const ViewTree = ({
  locations,
  unlinkedAssets = [],
  unlinkedComponents = [],
}: ViewTreeProps) => {
  return (
    <aside className="flex flex-col overflow-y-scroll">
      <div className="flex min-h-fit flex-col">
        {locations?.length > 0 &&
          locations.map((mappedLocation) => (
            <TreeNode
              nodeType="location"
              node={mappedLocation}
              key={mappedLocation.id}
            />
          ))}

        {unlinkedAssets?.length > 0 &&
          unlinkedAssets.map((unlinkedAsset) => (
            <TreeNode
              nodeType="asset"
              node={unlinkedAsset}
              key={unlinkedAsset.id}
            />
          ))}

        {unlinkedComponents?.length > 0 &&
          unlinkedComponents.map((unlinkedComponent) => (
            <TreeNode
              nodeType="component"
              node={unlinkedComponent}
              key={unlinkedComponent.id}
            />
          ))}
      </div>
    </aside>
  );
};
