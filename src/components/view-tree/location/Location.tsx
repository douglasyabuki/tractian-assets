import { Icons } from '@/icons/Icons';
import { Asset } from '../assets/Asset';
import { Component } from '../components/Component';

interface LocationProps {
    // id: string;
    // name: string;
    // components: Asset[];
    // assets: Asset[];
    // locations: LocationProps[];
    id,
    name,
    components,
    assets,
    locations,
}

export const Location = ({id, name, components, assets, locations}: LocationProps) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
      <Icons.LOCATION />
      {name}
      </div>
        <div className='px-4'>
        {
          locations?.length > 0 && locations.map((location) => <Location key={location.id} {...location}/>)
        }
        {
          assets?.length > 0 && assets.map((asset) => <Asset key={asset.id} {...asset}/>)
        }
        {
          components?.length > 0 && components.map((component) => <Component key={component.id} {...component}/>)
        }
        </div>
    </div>
  );
}