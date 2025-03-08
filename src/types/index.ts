export type IUser = {
  userId: string;
  role: string;
  email: string;
  iat: number;
  exp: number;
};
export type Apartment = {
  _id: string;
  title: string;
  description: string;
  location: string;
  rentAmount: number;
  bedrooms: number;
  available: boolean;
  landlord: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type TUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: "admin" | "user" | "landlord"; // Add more roles if needed
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export interface Property {
  available: boolean;
  bedrooms: number;
  createdAt: string;
  description: string;
  images: string[];
  landlord: string;
  location: string;
  rentAmount: number;
  title: string;
  updatedAt: string;
  _id: string;
}
export type TRentalRequest = {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  duration: string;
  landlordPhone: string;
  message: string;
  moveInDate: string; // ISO date string
  paymentOptionVisible: boolean;
  property: string; // Property ID
  status: "pending" | "approved" | "rejected"; // Possible statuses
  tenant: string; // Tenant ID
  __v: number;
};
export type TBooking = {
  _id: string;
  property: string;
  duration: string;
  landlordPhone?: string;
  message: string;
  moveInDate: string;
  paymentOptionVisible: boolean;
  status: "approved" | "pending" | "rejected";
  tenant: string;
  createdAt: string;
  updatedAt: string;
};
