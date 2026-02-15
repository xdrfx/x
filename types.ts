
export type AuthMode = 'login' | 'register' | null;

export interface User {
  id?: string;
  username: string;
  isLoggedIn: boolean;
  purchaseStatus?: 'yearly' | 'lifetime' | null;
}

export interface PriceTier {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}
