export interface Filters {
  brand?: string[];
  price?: {
    min?: number;
    max?: number;
  };
  rate?: number;
}
