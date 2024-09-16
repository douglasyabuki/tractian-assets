import { IAsset, ILocation } from "@/interfaces/interfaces";
import { BatchRenderer } from "./batch-renderer/BatchRenderer";
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
    <aside className="flex max-h-[calc(100vh-12.5rem)] flex-col overflow-y-auto">
      <div className="flex max-h-max flex-col">
        {locations?.length > 0 && (
          <BatchRenderer
            items={locations}
            renderItem={(mappedLocation) => (
              <TreeNode
                nodeType="location"
                node={mappedLocation}
                key={mappedLocation.id}
              />
            )}
          />
        )}

        {unlinkedAssets?.length > 0 && (
          <BatchRenderer
            items={unlinkedAssets}
            renderItem={(unlinkedAsset) => (
              <TreeNode
                nodeType="asset"
                node={unlinkedAsset}
                key={unlinkedAsset.id}
              />
            )}
          />
        )}

        {unlinkedComponents?.length > 0 && (
          <BatchRenderer
            items={unlinkedComponents}
            renderItem={(unlinkedComponent) => (
              <TreeNode
                nodeType="component"
                node={unlinkedComponent}
                key={unlinkedComponent.id}
              />
            )}
          />
        )}
      </div>
    </aside>
  );
};
