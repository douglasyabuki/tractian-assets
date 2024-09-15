import { CompanyContext } from '@/contexts/CompanyContext';
import { useRequest } from '@/hooks/use-request';
import { IAsset, ICompany, ILocation } from '@/services/company';
import { useContext, useEffect } from 'react';
import { ComponentViewer } from './component-viewer/ComponentViewer';
import { SearchableViewTree } from './searchable-view-tree/SearchableViewTree';

type AssetsContainer = {
    selectedCompany: ICompany
}

export const AssetsContainer = ({ selectedCompany }: AssetsContainer) => {
    const { selectedComponent, onComponentSelect } = useContext(CompanyContext)
    const { data: locations = [], sendRequest: getLocations } = useRequest<ILocation[], Error>();
    const { data: assets = [], sendRequest: getAssets } = useRequest<IAsset[], Error>();

    useEffect(() => {
        if (selectedCompany?.id) {
            getLocations(`/api/companies/${selectedCompany.id}/locations`, {
                method: "GET",
                onSuccess: (locations) => {
                    console.log("Locations fetched:", locations);
                },
                onError: (err) => {
                    console.error("Error fetching locations:", err);
                },
            });
            getAssets(`/api/companies/${selectedCompany.id}/assets`, {
                method: "GET",
                onSuccess: (assets) => {
                    console.log("Assets fetched:", assets);
                },
                onError: (err) => {
                    console.error("Error fetching assets:", err);
                },
            });
        }
    }, [selectedCompany, getLocations, getAssets]);

    return (
        <div className="flex flex-col px-4 py-[1.125rem] gap-[0.625rem] box-border w-auto min-w-full min-h-full flex-1 h-auto bg-slate-800">
            <div className='flex w-full justify-between items-center h-fit'>
                <div className='flex items-center gap-2'>
                    <h2 className='text-xl font-semibold leading-7'>Ativos</h2><p className='text-sm leading-5'>{`/ ${selectedCompany?.name} Unit`}</p></div>
                <div className='flex items-center justify-end gap-2'>
                    <button className='py-2 px-4 border-gray-200 border-[1.5px]'>Energy sensor</button>
                    <button className='py-2 px-4 border-gray-200 border-[1.5px]'>Critical</button>
                </div>
            </div>
            <div className="h-auto w-full grid grid-cols-[30rem_auto] gap-2">
                <SearchableViewTree assets={assets} locations={locations} onComponentSelect={onComponentSelect} />
                <ComponentViewer component={selectedComponent} />
            </div>
        </div>
    );
}