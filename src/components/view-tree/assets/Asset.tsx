import { Icons } from '@/icons/Icons';
import { Component } from '../components/Component';

interface Asset {
    id,
    locationId,
    name,
    parentId,
    sensorType,
    status,
    assets,
    components
    // id: "60fc7b9807a5ec001e8cfa13",
    // locationId: "60fc7b979299ff001e4c85b8",
    // name: "Asset 10183",
    // parentId: null,
    // sensorType: null,
    // status: null
    // assets: Asset[]
    // components: Asset[]
}

export const Asset = ({ id, locationId, name, parentId, status, assets, components }: Asset) => {
    return (
        <div className='flex flex-col'>
            <div className='flex gap-2 px-4'>
                <Icons.ASSET />
                {name}
            </div>
            {
                assets?.length > 0 && assets.map((asset) => <Asset key={asset.id} {...asset} />)
            }
            {
                components?.length > 0 && components.map((component) => <Component key={component.id} {...component} />)
            }
        </div>
    );
}