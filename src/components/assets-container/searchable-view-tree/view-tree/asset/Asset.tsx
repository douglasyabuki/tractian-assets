import { DropdownButton } from "@/components/ui/buttons/dropdown-button/DropdownButton";
import { Icons } from "@/icons/Icons";
import { IAsset } from "@/interfaces/interfaces";
import { useState } from "react";
import { Component } from "../component/Component";

interface AssetProps extends IAsset {
  onComponentSelect: (component: IAsset) => void;
}

export const Asset = ({
  name,
  assets = [],
  components = [],
  onComponentSelect,
}: AssetProps) => {
  const isToggleable = components?.length > 0 || assets?.length > 0;
  const [isToggled, setIsToggled] = useState(isToggleable);

  return (
    <div className="flex flex-col space-x-[0.525rem] pl-3 text-sm uppercase">
      <div className="flex w-full items-center justify-start gap-2">
        {isToggleable && (
          <DropdownButton
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        )}
        <Icons.ASSET />
        {name}
      </div>
      {isToggleable && isToggled && (
        <div className="box-border flex flex-col border-l-[1px] border-l-white/5 pl-3">
          {assets?.length > 0 &&
            assets.map((asset) => (
              <Asset
                key={asset.id}
                onComponentSelect={onComponentSelect}
                {...asset}
              />
            ))}
          {components?.length > 0 &&
            components.map((component) => (
              <Component
                key={component.id}
                onComponentSelect={() => onComponentSelect(component)}
                {...component}
              />
            ))}
        </div>
      )}
    </div>
  );
};
