export interface ProductConfiguratorProps {
  products: Product[];
}

export interface Product {
  id: string;
  "product-label": string;
  "product-id": string;
  attributes: Attribute[];
  price: number;
}

export interface Attribute {
  id: string;
  type: string;
  value: number | string;
  label: string;
  selectable: boolean;
}

export type HandleOptionClick = (
  attributeType: Attribute["type"],
  value: string
) => void;
