import { DropdownButton } from "@/components/ui/buttons/dropdown-button/DropdownButton";
import { Icons } from "@/icons/Icons";
import { IAsset } from "@/interfaces/interfaces";
import { useState } from "react";
import { Asset } from "../asset/Asset";
import { Component } from "../component/Component";

interface LocationProps {
  id: string;
  name: string;
  parentId?: string | null;
  components?: IAsset[];
  assets?: IAsset[];
  locations?: LocationProps[];
  onComponentSelect: (component: IAsset) => void;
}

export const Location = ({
  name,
  components = [],
  assets = [],
  locations = [],
  onComponentSelect,
}: LocationProps) => {
  const isToggleable =
    components?.length > 0 || assets?.length > 0 || locations?.length > 0;
  const [isToggled, setIsToggled] = useState(true);

  console.log({ components });

  return (
    <div className="flex w-full flex-col items-start justify-start gap-1 space-x-[0.525rem] py-[1.125rem] pl-3">
      <div className="flex w-full items-center justify-start gap-2 text-sm uppercase">
        {isToggleable && (
          <DropdownButton
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        )}
        <Icons.LOCATION />
        {name}
      </div>
      {isToggleable && isToggled && (
        <div className="box-border flex flex-col border-l-[1px] border-l-white/5 pl-3">
          {locations?.length > 0 &&
            locations.map((location) => (
              <Location
                key={location.id}
                {...location}
                onComponentSelect={onComponentSelect}
              />
            ))}
          {assets?.length > 0 &&
            assets.map((asset) => (
              <Asset
                key={asset.id}
                {...asset}
                onComponentSelect={onComponentSelect}
              />
            ))}
          {components?.length > 0 &&
            components.map((component) => (
              <Component
                key={component.id}
                {...component}
                onComponentSelect={() => onComponentSelect(component)}
              />
            ))}
        </div>
      )}
    </div>
  );
};
