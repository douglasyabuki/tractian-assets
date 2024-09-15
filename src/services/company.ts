import { IAsset, ICompany, ILocation } from "@/interfaces/interfaces";

export interface IFetchCompanyLocationsParams {
  companyId: string;
}

export interface IFetchCompanyAssetsParams {
  companyId: string;
}

export const fetchCompanies = async (): Promise<ICompany[]> => {
  const response = await fetch("/api/companies");
  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }
  return response.json();
};

export const fetchCompanyLocations = async (
  params?: IFetchCompanyLocationsParams,
): Promise<ILocation[]> => {
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

export const fetchCompanyAssets = async (
  params?: IFetchCompanyAssetsParams,
): Promise<IAsset[]> => {
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
