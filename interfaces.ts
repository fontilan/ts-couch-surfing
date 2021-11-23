import { LoyaltyUser } from "./enums.js";
import { Price, Country } from "./types.js";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    postcode: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}
