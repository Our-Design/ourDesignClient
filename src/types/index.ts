export interface Lead {
  _id: string;
  customerName: string;
  customerMobile: number;
  address: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
  budget: number;
  status: string;
  isVerified: boolean;
  assignedTo: null;
  propertyType: string;
  description: string;
  propertySize: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
