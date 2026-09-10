export interface BudgetBuild {
  slug: string;
  title: string;
  useCase:
    | "gaming"
    | "video"
    | "trabajo"
    | "programacion"
    | "ia"
    | "calidad-precio"
    | "economico";
  targetBudget?: number;
  summary: string;
  componentSlugs: string[]; // slugs de products.ts, los que ya estén en catálogo
  notes: string;
}

export const budgetBuilds: BudgetBuild[] = [
  {
    slug: "pc-gaming-1500",
    title: "Mejor PC gaming por 1.500 €",
    useCase: "gaming",
    targetBudget: 1500,
    summary:
      "1440p a más de 100 FPS en la mayoría de juegos actuales, con margen para subir gráficos con ray tracing gracias al dúo Ryzen 7 7800X3D + RTX 4070 Super.",
    componentSlugs: [
      "amd-ryzen-7-7800x3d",
      "msi-mag-b650-tomahawk-wifi",
      "kingston-fury-beast-ddr5-32gb-6000",
      "nvidia-rtx-4070-super",
      "samsung-990-pro-2tb",
      "corsair-rm750e-750w",
      "nzxt-h5-flow",
    ],
    notes:
      "Esta configuración prioriza el rendimiento en juegos por encima de tareas multihilo. Si además vas a usar el PC para edición de vídeo con frecuencia, valora subir a un procesador con más núcleos.",
  },
  {
    slug: "pc-calidad-precio",
    title: "Mejor PC calidad/precio",
    useCase: "calidad-precio",
    summary:
      "Un equilibrio entre precio y rendimiento con el Core i5-14600K, pensado para quien reparte su uso entre gaming y productividad sin gastar en la gama más alta.",
    componentSlugs: [
      "intel-core-i5-14600k",
      "kingston-fury-beast-ddr5-32gb-6000",
      "samsung-990-pro-2tb",
      "corsair-rm750e-750w",
      "nzxt-h5-flow",
    ],
    notes:
      "Faltan placa base y GPU concretas para esta franja de precio en el catálogo todavía; en cuanto añadamos más enlaces, completamos esta configuración con opciones B760/B660 y una gráfica de gama media.",
  },
];

export function getBudgetBuildBySlug(slug: string) {
  return budgetBuilds.find((b) => b.slug === slug);
}

export const useCaseLabels: Record<BudgetBuild["useCase"], string> = {
  gaming: "Gaming",
  video: "Edición de vídeo",
  trabajo: "Trabajo / oficina",
  programacion: "Programación",
  ia: "Inteligencia artificial",
  "calidad-precio": "Calidad/precio",
  economico: "Económico",
};
