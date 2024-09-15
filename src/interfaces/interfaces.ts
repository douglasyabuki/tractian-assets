export type SensorType = "energy" | "vibration";
export type StatusType = "operating" | "alert";
export type TreeNodeType = "location" | "asset" | "component";

export interface ICompany {
  id: string;
  name: string;
}

export interface ILocation {
  id: string;
  name: string;
  parentId?: string | null;
}


export interface IAsset {
  id: string;
  name: string;
  parentId?: string | null;
  locationId?: string | null;
  sensorId?: string;
  sensorType?: SensorType;
  status?: StatusType;
  gatewayId?: string;
  assets?: IAsset[];
}

export interface ITreeNode {
  id: string;
  name: string;
  type: TreeNodeType;
  sensorType?: SensorType;
  status?: StatusType;
  children?: ITreeNode[];
}

export interface IFilterOptions {
  searchQuery?: string;
  filterBySensorType?: SensorType;
  filterByCriticalStatus?: boolean;
}

export interface IAssetPageData {
  locations: ILocation[];
  assets: IAsset[];
  filters: IFilterOptions;
}

export interface IAssetTree {
  root: ITreeNode;
}
