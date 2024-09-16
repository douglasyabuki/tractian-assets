import { DropdownButton } from "@/components/ui/buttons/dropdown-button/DropdownButton";
import { FilterContext } from "@/contexts/FilterContext";
import { useTimeout } from "@/hooks/use-timeout";
import { Icons } from "@/icons/Icons";
import { IAsset, ILocation, TreeNodeType } from "@/interfaces/interfaces";
import { useContext, useMemo, useState } from "react";
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
  const [isToggled, setIsToggled] = useState(false);

  useTimeout(() => {
    if (filters.sensorEnergy || (filters.statusAlert && isToggleable)) {
      setIsToggled(true);
    }
  }, 500);

  return (
    <div className="flex w-full cursor-default flex-col items-start justify-start gap-1 space-x-[0.525rem] border-l-white/5 pl-3 pt-[1.125rem]">
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
              {((node as ILocation)?.locations?.length ?? 0) > 0 &&
                (node as ILocation).locations?.map((location) => (
                  <TreeNode
                    key={location.id}
                    node={location}
                    nodeType="location"
                  />
                ))}

              {node.assets &&
                node.assets.length > 0 &&
                node.assets.map((asset) => (
                  <TreeNode key={asset.id} node={asset} nodeType="asset" />
                ))}

              {node.components &&
                node.components.length > 0 &&
                node.components.map((component) => (
                  <TreeNode
                    key={component.id}
                    node={component}
                    nodeType="component"
                  />
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
