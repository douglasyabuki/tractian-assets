import { DropdownButton } from "@/components/ui/buttons/dropdown-button/DropdownButton";
import { FilterContext } from "@/contexts/FilterContext";
import { useTimeout } from "@/hooks/use-timeout";
import { Icons } from "@/icons/Icons";
import { IAsset, ILocation, TreeNodeType } from "@/interfaces/interfaces";
import { useContext, useMemo, useState } from "react";
import { BatchRenderer } from "../batch-renderer/BatchRenderer";
import { Component } from "../component/Component";

interface TreeNodeProps {
  node: ILocation | IAsset;
  nodeType: TreeNodeType;
}

const NODE_ICON_DICTIONARY: Record<TreeNodeType, React.ReactNode> = {
  location: <Icons.LOCATION />,
  asset: <Icons.ASSET />,
  component: <Icons.COMPONENT />,
};

export const TreeNode = ({ node, nodeType }: TreeNodeProps) => {
  const isToggleable = useMemo(() => {
    return (
      ((node as ILocation)?.locations?.length ?? 0) > 0 ||
      ((node as IAsset | ILocation)?.assets?.length ?? 0) > 0 ||
      ((node as IAsset | ILocation)?.components?.length ?? 0) > 0
    );
  }, [node]);
  const { filters } = useContext(FilterContext);
  const [isToggled, setIsToggled] = useState(isToggleable);

  useTimeout(() => {
    if (filters.sensorEnergy || (filters.statusAlert && isToggleable)) {
      setIsToggled(true);
    }
  }, 500);

  return (
    <div className="flex w-full cursor-default flex-col items-start justify-start gap-1 space-x-1 border-l-white/5 pl-2 pt-[1.125rem] md:space-x-[0.525rem] md:pl-3">
      {nodeType === "component" ? (
        <Component {...node} />
      ) : (
        <>
          <div
            className="flex h-7 w-full items-center justify-start gap-2 text-sm uppercase"
            onClick={() => {
              if (!isToggled && isToggleable) setIsToggled(true);
            }}
          >
            {isToggleable && (
              <DropdownButton
                isToggled={isToggled}
                onToggle={() => setIsToggled(!isToggled)}
              />
            )}
            {NODE_ICON_DICTIONARY[nodeType]}
            {node.name}
          </div>

          {isToggleable && isToggled && (
            <div className="box-border flex flex-col border-l-[1px] border-l-white/5 pl-3">
              {((node as ILocation)?.locations?.length ?? 0) > 0 && (
                <BatchRenderer
                  items={(node as ILocation).locations!}
                  renderItem={(location) => (
                    <TreeNode
                      nodeType="location"
                      node={location}
                      key={location.id}
                    />
                  )}
                  batchSize={5}
                />
              )}

              {node.assets && node.assets.length > 0 && (
                <BatchRenderer
                  items={node.assets}
                  renderItem={(asset) => (
                    <TreeNode nodeType="asset" node={asset} key={asset.id} />
                  )}
                  batchSize={10}
                />
              )}

              {node.components && node.components.length > 0 && (
                <BatchRenderer
                  items={node.components}
                  renderItem={(component) => (
                    <TreeNode
                      nodeType="component"
                      node={component}
                      key={component.id}
                    />
                  )}
                  batchSize={10}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
