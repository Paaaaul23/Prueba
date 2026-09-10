export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // párrafos
  relatedProductSlugs?: string[];
  publishedAt: string;
}

export const guides: Guide[] = [
  {
    slug: "mejor-procesador-calidad-precio-2026",
    title: "Mejor procesador calidad/precio en 2026",
    excerpt:
      "Cómo elegir entre AMD e Intel según tu uso real y qué procesador ofrece más rendimiento por euro ahora mismo.",
    content: [
      "Elegir procesador ya no depende solo de núcleos y frecuencia: la arquitectura híbrida de Intel y la caché 3D V-Cache de AMD han cambiado la forma de comparar rendimiento real en juegos y en tareas de trabajo.",
      "Si tu uso es principalmente gaming, los procesadores con caché 3D V-Cache suelen ofrecer más fotogramas por segundo que alternativas con más núcleos, incluso a menor frecuencia bruta.",
      "Si reparte su tiempo entre juegos y tareas multihilo como edición de vídeo o compilación de código, un procesador con más núcleos totales (P-Core + E-Core en Intel, o más núcleos Zen en AMD) puede compensar mejor la inversión.",
      "Antes de decidir, revisa siempre el socket y el tipo de memoria compatible: cambiar de generación a veces implica cambiar también de placa base y memoria RAM.",
    ],
    relatedProductSlugs: ["amd-ryzen-7-7800x3d", "intel-core-i5-14600k"],
    publishedAt: "2026-08-01",
  },
  {
    slug: "ddr4-vs-ddr5",
    title: "DDR4 vs DDR5: ¿merece la pena el salto?",
    excerpt:
      "Diferencias reales de rendimiento, precio y compatibilidad entre memoria DDR4 y DDR5 en 2026.",
    content: [
      "DDR5 ofrece mayor ancho de banda y margen de overclock que DDR4, pero con latencias más altas de fábrica, lo que en algunos juegos reduce parte de la ventaja teórica de velocidad.",
      "El salto se nota más en tareas que mueven grandes volúmenes de datos en memoria (edición de vídeo, ciertos flujos de IA) que en gaming puro, donde la diferencia suele ser moderada.",
      "La decisión real casi siempre viene marcada por la placa base y el procesador elegidos: la mayoría de plataformas actuales de gama media-alta ya solo admiten DDR5, mientras que las de gama de entrada siguen ofreciendo DDR4 para abaratar el conjunto.",
    ],
    relatedProductSlugs: ["kingston-fury-beast-ddr5-32gb-6000"],
    publishedAt: "2026-07-15",
  },
  {
    slug: "como-montar-un-pc-por-piezas",
    title: "Cómo montar un PC por piezas paso a paso",
    excerpt:
      "Guía general del proceso de montaje, del orden de instalación a los errores más habituales de un primer montaje.",
    content: [
      "El orden recomendado es: procesador y memoria RAM sobre la placa base (fuera de la caja), después la placa base dentro de la caja, la fuente de alimentación, el almacenamiento, la tarjeta gráfica y por último el cableado.",
      "Antes de comprar nada, comprueba la compatibilidad de socket entre procesador y placa base, el tipo de memoria soportado, que la fuente tenga potencia suficiente para la tarjeta gráfica y que la caja admita la longitud de esa GPU.",
      "Nuestro configurador hace estas comprobaciones automáticamente mientras eliges cada pieza, así puedes montar tu lista de la compra sin sorpresas al llegar a casa.",
    ],
    publishedAt: "2026-05-20",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
