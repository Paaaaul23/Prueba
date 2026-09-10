export type ProductCategory =
  | "cpu"
  | "gpu"
  | "motherboard"
  | "ram"
  | "ssd"
  | "hdd"
  | "psu"
  | "case"
  | "cooler-air"
  | "cooler-liquid"
  | "fan"
  | "monitor"
  | "keyboard"
  | "mouse"
  | "headset"
  | "microphone"
  | "webcam"
  | "mousepad"
  | "speakers"
  | "network-card"
  | "capture-card"
  | "ups"
  | "hub"
  | "cable";

export interface Spec {
  label: string;
  value: string;
}

export interface SpecGroup {
  title: string;
  specs: Spec[];
}

export interface RadarAxis {
  label: string;
  value: number; // 0-100
}

export interface CompatibilityInfo {
  socket?: string; // CPU / motherboard socket, e.g. "AM5", "LGA1700"
  ramType?: "DDR4" | "DDR5";
  formFactor?: "ATX" | "Micro-ATX" | "Mini-ITX" | "E-ATX";
  supportedFormFactors?: CompatibilityInfo["formFactor"][];
  tdpW?: number; // CPU / GPU power draw
  recommendedPsuW?: number; // GPU recommended PSU wattage
  wattageW?: number; // PSU own wattage
  maxGpuLengthMm?: number; // Case
  gpuLengthMm?: number; // GPU
  maxCoolerHeightMm?: number; // Case
  coolerHeightMm?: number; // Air cooler
  memorySlots?: number; // Motherboard
  maxMemoryGb?: number; // Motherboard
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  images: string[];
  price: number;
  currency: "EUR";
  affiliateUrl: string;
  affiliateConfirmed: boolean; // false = enlace de prueba pendiente de confirmar producto exacto
  shortDescription: string;
  description: string;
  specGroups: SpecGroup[];
  radar: RadarAxis[];
  pros: string[];
  cons: string[];
  idealFor: string[];
  rating: number; // 0-5
  reviewCount: number;
  reviewSummary: string;
  compatibility?: CompatibilityInfo;
  compatibleWith?: string[]; // slugs
  alternatives?: string[]; // slugs
  featured?: boolean;
  isNew?: boolean;
  isDeal?: boolean;
  dealPrice?: number;
  publishedAt: string; // ISO date, para "novedades"
}

export interface CategoryDef {
  slug: ProductCategory;
  name: string;
  namePlural: string;
  description: string;
  group: "componentes" | "perifericos";
  configuratorSlot?:
    | "cpu"
    | "motherboard"
    | "ram"
    | "gpu"
    | "storage"
    | "psu"
    | "case"
    | "cooler";
}
