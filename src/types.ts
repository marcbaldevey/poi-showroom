export type Material = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  metadata: null;
  companyId: string;
  name: string;
  sku: string;
  width: string;
  units: string;
  price: null;
  stockAvailable: boolean;
  materialType: MaterialType;
  materialTypeId: number;
  partnerSKU: null;
  partnerName: null;
  partner: null;
  partnerId: null;
};

export type MaterialType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  metadata: null;
  deletedAt: null;
  name: string;
  description: string;
  units: string;
  inkType: null;
  inkTypeId: null;
};
