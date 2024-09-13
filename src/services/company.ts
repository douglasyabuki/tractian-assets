export interface Company {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  name: string;
  parentId?: string | null;
}

export interface Asset {
  id: string;
  name: string;
  parentId?: string | null;
  locationId?: string | null;
  sensorId?: string;
  sensorType?: "energy" | "vibration";
  status?: "operating" | "offline" | "critical";
  gatewayId?: string;
  subAssets?: Asset[]
}

export interface TreeNode {
  id: string;
  name: string;
  type: "location" | "sub-location" | "asset" | "sub-asset" | "component";
  sensorType?: "energy" | "vibration";
  status?: "operating" | "offline" | "critical"; 
  children?: TreeNode[];
}

export interface FilterOptions {
  searchQuery?: string;
  filterBySensorType?: "energy" | "vibration";
  filterByCriticalStatus?: boolean;
}

export interface AssetPageData {
  locations: Location[];
  assets: Asset[]; 
  filters: FilterOptions;
}

export interface AssetTree {
  root: TreeNode;
}

export const fetchCompanies = async (): Promise<Company[]> => {
  const response = await fetch("api/companies");
  if (!response.ok) {
    throw new Error("failed to fetch companies");
  }
  return response.json();
};

export interface FetchCompanyLocationsParams {
  companyId: string;
}

export const fetchCompanyLocations = async (params?: FetchCompanyLocationsParams): Promise<Location[]> => {
  if (!params || !params.companyId) {
    throw new Error("Company ID is required to fetch locations");
  }

  const { companyId } = params;
  const response = await fetch(`/api/companies/${companyId}/locations`);
  if (!response.ok) {
    throw new Error(`Failed to fetch locations for company ${companyId}`);
  }
  return response.json();
};

export interface FetchCompanyAssetsParams {
  companyId: string;
}

export const fetchCompanyAssets = async (params?: FetchCompanyAssetsParams): Promise<Asset[]> => {
  if (!params || !params.companyId) {
    throw new Error("Company ID is required to fetch assets");
  }

  const { companyId } = params;
  const response = await fetch(`/api/companies/${companyId}/assets`);
  if (!response.ok) {
    throw new Error(`Failed to fetch assets for company ${companyId}`);
  }
  return response.json();
};