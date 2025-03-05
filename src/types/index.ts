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
