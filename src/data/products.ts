import { Product } from "@/types/product";

// Los 3 enlaces de afiliado de prueba proporcionados. Se han asignado
// provisionalmente a 3 productos de ejemplo (CPU, GPU y SSD) hasta que
// se confirme qué producto exacto es cada enlace. Cuando se confirme,
// basta con mover `affiliateUrl` al producto correcto y poner
// `affiliateConfirmed: true`.
const TEST_LINKS = {
  link1: "https://amzn.to/3QjWDr7",
  link2: "https://amzn.to/4w6SAgS",
  link3: "https://amzn.to/3SXpS3C",
};

export const products: Product[] = [
  {
    id: "cpu-ryzen-7800x3d",
    slug: "amd-ryzen-7-7800x3d",
    name: "AMD Ryzen 7 7800X3D",
    brand: "AMD",
    category: "cpu",
    images: ["/products/cpu-ryzen-7800x3d.svg"],
    price: 379.9,
    currency: "EUR",
    affiliateUrl: TEST_LINKS.link1,
    affiliateConfirmed: false,
    shortDescription:
      "El procesador gaming de referencia gracias a su caché 3D V-Cache.",
    description:
      "El Ryzen 7 7800X3D combina 8 núcleos Zen 4 con la tecnología 3D V-Cache de AMD, que apila memoria caché adicional sobre el chip para reducir la latencia en juegos. Es, generación tras generación, uno de los procesadores más recomendados específicamente para gaming, ya que en muchos títulos supera a chips con más núcleos o frecuencia gracias a esa caché extra. Fuera de los juegos rinde algo por debajo de sus hermanos sin 3D V-Cache en tareas muy multihilo, pero su consumo y temperaturas son excelentes.",
    specGroups: [
      {
        title: "Núcleos y frecuencia",
        specs: [
          { label: "Núcleos / hilos", value: "8 / 16" },
          { label: "Frecuencia base", value: "4.2 GHz" },
          { label: "Frecuencia boost", value: "5.0 GHz" },
          { label: "Caché L3", value: "96 MB (3D V-Cache)" },
        ],
      },
      {
        title: "Plataforma",
        specs: [
          { label: "Socket", value: "AM5" },
          { label: "Litografía", value: "5 nm (TSMC)" },
          { label: "Memoria soportada", value: "DDR5 hasta 5200 MT/s" },
          { label: "Líneas PCIe", value: "PCIe 5.0 (24 líneas)" },
          { label: "Gráfica integrada", value: "AMD Radeon (2 CU)" },
        ],
      },
      {
        title: "Consumo y refrigeración",
        specs: [
          { label: "TDP", value: "120 W" },
          { label: "Refrigerador incluido", value: "No" },
          { label: "Temperatura máxima", value: "89 °C" },
        ],
      },
    ],
    radar: [
      { label: "Rendimiento gaming", value: 96 },
      { label: "Rendimiento multihilo", value: 72 },
      { label: "Eficiencia", value: 90 },
      { label: "Relación calidad/precio", value: 88 },
      { label: "Temperaturas", value: 85 },
      { label: "Futuro (upgrade)", value: 82 },
    ],
    pros: [
      "El mejor rendimiento en juegos de su gama por la caché 3D V-Cache",
      "Consumo y temperaturas muy contenidos para su rendimiento",
      "Plataforma AM5 con recorrido de futuras actualizaciones",
    ],
    cons: [
      "Frecuencia boost más limitada que otros Ryzen 7000 sin 3D",
      "No incluye disipador, hay que comprarlo aparte",
      "Las placas base AM5 son más caras que las AM4",
    ],
    idealFor: [
      "Gaming en 1440p y 4K sin cuello de botella de CPU",
      "Quien prioriza FPS por encima de tareas de renderizado",
      "Builds que se quieran mantener varios años en AM5",
    ],
    rating: 4.8,
    reviewCount: 3200,
    reviewSummary:
      "La inmensa mayoría de las reseñas destacan el salto de rendimiento en juegos frente a generaciones anteriores y lo fresco que se mantiene incluso con disipadores de aire de gama media. Algunas reseñas señalan que, si el uso es principalmente edición de vídeo o compilación, otros Ryzen de la gama rinden más por el mismo precio.",
    compatibility: { socket: "AM5", ramType: "DDR5", tdpW: 120 },
    compatibleWith: ["msi-mag-b650-tomahawk-wifi"],
    alternatives: ["intel-core-i5-14600k"],
    featured: true,
    isNew: false,
    isDeal: true,
    dealPrice: 349.9,
    publishedAt: "2026-08-20",
  },
  {
    id: "cpu-i5-14600k",
    slug: "intel-core-i5-14600k",
    name: "Intel Core i5-14600K",
    brand: "Intel",
    category: "cpu",
    images: ["/products/cpu-i5-14600k.svg"],
    price: 319.0,
    currency: "EUR",
    affiliateUrl: "",
    affiliateConfirmed: false,
    shortDescription:
      "Equilibrio entre rendimiento gaming y multihilo a buen precio.",
    description:
      "El Core i5-14600K usa la arquitectura híbrida de Intel, combinando núcleos de rendimiento (P-Core) y eficiencia (E-Core) para ofrecer un resultado muy competitivo tanto en juegos como en tareas de creación de contenido. Es una alternativa habitual al Ryzen 7 7800X3D para quien reparte su uso entre gaming y trabajo multihilo, y suele encontrarse a buen precio en el mercado español.",
    specGroups: [
      {
        title: "Núcleos y frecuencia",
        specs: [
          { label: "Núcleos P-Core / E-Core", value: "6 / 8" },
          { label: "Hilos", value: "20" },
          { label: "Frecuencia boost P-Core", value: "5.3 GHz" },
          { label: "Caché L3", value: "24 MB" },
        ],
      },
      {
        title: "Plataforma",
        specs: [
          { label: "Socket", value: "LGA1700" },
          { label: "Memoria soportada", value: "DDR5 hasta 5600 MT/s / DDR4" },
          { label: "Líneas PCIe", value: "PCIe 5.0 + 4.0" },
        ],
      },
      {
        title: "Consumo y refrigeración",
        specs: [
          { label: "TDP base / máximo", value: "125 W / 181 W" },
          { label: "Refrigerador incluido", value: "No" },
        ],
      },
    ],
    radar: [
      { label: "Rendimiento gaming", value: 88 },
      { label: "Rendimiento multihilo", value: 85 },
      { label: "Eficiencia", value: 68 },
      { label: "Relación calidad/precio", value: 85 },
      { label: "Temperaturas", value: 65 },
      { label: "Futuro (upgrade)", value: 60 },
    ],
    pros: [
      "Muy buen equilibrio entre gaming y tareas multihilo",
      "Compatible con placas DDR4 más económicas",
      "Precio agresivo frente a la competencia directa",
    ],
    cons: [
      "Consume y calienta más que el 7800X3D bajo carga sostenida",
      "Necesita una buena refrigeración para no hacer throttling",
      "Plataforma LGA1700 al final de su recorrido",
    ],
    idealFor: [
      "Uso mixto de gaming y productividad",
      "Quien ya tiene memoria DDR4 y quiere reaprovecharla",
      "Presupuestos ajustados que buscan buen rendimiento por euro",
    ],
    rating: 4.5,
    reviewCount: 2100,
    reviewSummary:
      "Los compradores valoran positivamente el rendimiento por precio y la flexibilidad de memoria, aunque muchas reseñas insisten en emparejarlo con una buena torre de refrigeración para evitar temperaturas elevadas en cargas prolongadas.",
    compatibility: { socket: "LGA1700", ramType: "DDR5", tdpW: 125 },
    alternatives: ["amd-ryzen-7-7800x3d"],
    featured: false,
    publishedAt: "2026-06-10",
  },
  {
    id: "mb-msi-b650-tomahawk",
    slug: "msi-mag-b650-tomahawk-wifi",
    name: "MSI MAG B650 Tomahawk WiFi",
    brand: "MSI",
    category: "motherboard",
    images: ["/products/mb-msi-b650-tomahawk.svg"],
    price: 219.9,
    currency: "EUR",
    affiliateUrl: "",
    affiliateConfirmed: false,
    shortDescription: "Placa AM5 robusta con WiFi 6E integrado.",
    description:
      "Placa base de gama media-alta para socket AM5 con una fase de alimentación sobrada para procesadores Ryzen 7000/9000, WiFi 6E y Bluetooth integrados, dos ranuras M.2 con disipador y un diseño pensado para durar varias generaciones de CPU sobre el mismo socket.",
    specGroups: [
      {
        title: "Plataforma",
        specs: [
          { label: "Socket", value: "AM5" },
          { label: "Chipset", value: "AMD B650" },
          { label: "Formato", value: "ATX" },
        ],
      },
      {
        title: "Memoria y expansión",
        specs: [
          { label: "Ranuras RAM", value: "4 x DDR5, hasta 128 GB" },
          { label: "Velocidad RAM soportada", value: "Hasta 6400+ MT/s (OC)" },
          { label: "Ranuras M.2", value: "2 x NVMe PCIe 4.0" },
          { label: "PCIe principal", value: "PCIe 4.0 x16" },
        ],
      },
      {
        title: "Conectividad",
        specs: [
          { label: "WiFi", value: "WiFi 6E" },
          { label: "LAN", value: "2.5 Gbps" },
          { label: "USB", value: "USB-C 10 Gbps + USB-A múltiples" },
        ],
      },
    ],
    radar: [
      { label: "VRM / alimentación", value: 82 },
      { label: "Conectividad", value: 88 },
      { label: "Expansión", value: 78 },
      { label: "Relación calidad/precio", value: 90 },
      { label: "Refrigeración M.2", value: 80 },
      { label: "Compatibilidad futura", value: 92 },
    ],
    pros: [
      "VRM sobrada para Ryzen de 8 núcleos sin agobios térmicos",
      "WiFi 6E y 2.5 Gbps de serie",
      "Buen precio dentro de la gama B650",
    ],
    cons: [
      "Solo 2 ranuras M.2 frente a las 3-4 de placas superiores",
      "BIOS algo más simple que las gamas X670",
    ],
    idealFor: [
      "Builds gaming AM5 de gama media-alta",
      "Quien quiera WiFi integrado sin pasar a chipset X670",
    ],
    rating: 4.6,
    reviewCount: 940,
    reviewSummary:
      "Se valora especialmente la relación calidad/precio y la fase de alimentación, sobrada para procesadores de 8 núcleos. Algunas reseñas piden más puertos M.2 para builds con mucho almacenamiento NVMe.",
    compatibility: {
      socket: "AM5",
      ramType: "DDR5",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemoryGb: 128,
    },
    compatibleWith: ["amd-ryzen-7-7800x3d"],
    featured: false,
    publishedAt: "2026-05-02",
  },
  {
    id: "gpu-rtx-4070-super",
    slug: "nvidia-rtx-4070-super",
    name: "NVIDIA GeForce RTX 4070 Super",
    brand: "NVIDIA",
    category: "gpu",
    images: ["/products/gpu-rtx-4070-super.svg"],
    price: 629.0,
    currency: "EUR",
    affiliateUrl: TEST_LINKS.link2,
    affiliateConfirmed: false,
    shortDescription: "1440p con margen de sobra y 4K solvente con DLSS.",
    description:
      "La RTX 4070 Super amplía los núcleos CUDA respecto a la 4070 original, ofreciendo un salto de rendimiento notable en 1440p y permitiendo jugar en 4K con DLSS y trazado de rayos activado en la mayoría de títulos. Su consumo se mantiene razonable para el rendimiento que ofrece, y es una de las opciones favoritas en la gama alta-media por precio.",
    specGroups: [
      {
        title: "Núcleo gráfico",
        specs: [
          { label: "Núcleos CUDA", value: "7168" },
          { label: "Memoria", value: "12 GB GDDR6X" },
          { label: "Bus de memoria", value: "192 bits" },
          { label: "Frecuencia boost", value: "2475 MHz" },
        ],
      },
      {
        title: "Consumo y dimensiones",
        specs: [
          { label: "TDP", value: "220 W" },
          { label: "PSU recomendada", value: "650 W" },
          { label: "Conector alimentación", value: "1x 16 pines (12VHPWR)" },
          { label: "Longitud", value: "304 mm (según modelo)" },
        ],
      },
      {
        title: "Conectividad",
        specs: [
          { label: "Salidas de vídeo", value: "3x DisplayPort 1.4a, 1x HDMI 2.1" },
          { label: "Interfaz", value: "PCIe 4.0 x16" },
        ],
      },
    ],
    radar: [
      { label: "Rendimiento 1440p", value: 92 },
      { label: "Rendimiento 4K", value: 78 },
      { label: "Ray tracing / DLSS", value: 90 },
      { label: "Eficiencia", value: 80 },
      { label: "Relación calidad/precio", value: 84 },
      { label: "VRAM para el futuro", value: 75 },
    ],
    pros: [
      "Gran salto de rendimiento en 1440p frente a la 4070 estándar",
      "DLSS 3 y ray tracing muy solventes",
      "Consumo razonable para su rendimiento",
    ],
    cons: [
      "12 GB de VRAM pueden quedarse justos en 4K a máxima calidad en el futuro",
      "El conector 12VHPWR requiere adaptador o fuente moderna",
    ],
    idealFor: [
      "Gaming en 1440p a máxima calidad y altas tasas de refresco",
      "4K con DLSS activado en la mayoría de juegos",
      "Creadores de contenido con cargas de render puntuales",
    ],
    rating: 4.7,
    reviewCount: 1850,
    reviewSummary:
      "Las reseñas coinciden en que es el punto dulce actual para 1440p, con menciones frecuentes a la mejora de rendimiento frente a la 4070 no Super por una diferencia de precio moderada. Algunos usuarios avanzados apuntan a la VRAM como posible limitación a largo plazo en 4K.",
    compatibility: { tdpW: 220, recommendedPsuW: 650, gpuLengthMm: 304 },
    alternatives: [],
    featured: true,
    isNew: true,
    publishedAt: "2026-08-28",
  },
  {
    id: "ram-kingston-fury-32gb",
    slug: "kingston-fury-beast-ddr5-32gb-6000",
    name: "Kingston Fury Beast DDR5 32GB (2x16GB) 6000MHz",
    brand: "Kingston",
    category: "ram",
    images: ["/products/ram-kingston-fury.svg"],
    price: 99.9,
    currency: "EUR",
    affiliateUrl: "",
    affiliateConfirmed: false,
    shortDescription: "Kit dual channel DDR5 a buen precio con perfil EXPO/XMP.",
    description:
      "Kit de dos módulos de 16 GB pensado para aprovechar el dual channel en placas AM5 e Intel de última generación. Con perfiles XMP 3.0 y EXPO de fábrica, alcanza los 6000 MHz sin necesidad de ajustes manuales complejos, un punto dulce de frecuencia/latencia para plataformas actuales.",
    specGroups: [
      {
        title: "Capacidad y velocidad",
        specs: [
          { label: "Capacidad total", value: "32 GB (2x16 GB)" },
          { label: "Velocidad", value: "6000 MT/s" },
          { label: "Latencias", value: "CL36" },
          { label: "Voltaje", value: "1.35 V" },
        ],
      },
      {
        title: "Compatibilidad",
        specs: [
          { label: "Tipo", value: "DDR5" },
          { label: "Perfiles", value: "Intel XMP 3.0 / AMD EXPO" },
          { label: "Disipador", value: "Aluminio bajo perfil" },
        ],
      },
    ],
    radar: [
      { label: "Velocidad", value: 82 },
      { label: "Latencia", value: 75 },
      { label: "Compatibilidad", value: 95 },
      { label: "Relación calidad/precio", value: 92 },
      { label: "Estética", value: 70 },
      { label: "Overclock", value: 65 },
    ],
    pros: [
      "6000 MHz de fábrica sin tener que hacer overclock manual",
      "Compatible con perfiles Intel y AMD por igual",
      "Precio muy competitivo dentro de DDR5",
    ],
    cons: [
      "Perfil bajo, poco vistoso si buscas iluminación RGB",
      "Sin versión con más capacidad por módulo en esta gama",
    ],
    idealFor: [
      "Builds AM5 e Intel de gama media que buscan buen rendimiento sin pagar de más",
      "Quien no necesita RGB y prioriza estabilidad",
    ],
    rating: 4.6,
    reviewCount: 2600,
    reviewSummary:
      "Muy bien valorada por activar el perfil EXPO/XMP sin problemas de estabilidad en la mayoría de placas AM5 e Intel recientes, siendo una de las opciones más recomendadas en relación calidad/precio en foros especializados.",
    compatibility: { ramType: "DDR5" },
    featured: false,
    publishedAt: "2026-04-18",
  },
  {
    id: "ssd-samsung-990-pro-2tb",
    slug: "samsung-990-pro-2tb",
    name: "Samsung 990 Pro 2TB NVMe",
    brand: "Samsung",
    category: "ssd",
    images: ["/products/ssd-samsung-990-pro.svg"],
    price: 159.9,
    currency: "EUR",
    affiliateUrl: TEST_LINKS.link3,
    affiliateConfirmed: false,
    shortDescription: "Referencia en SSD PCIe 4.0 por velocidad y fiabilidad.",
    description:
      "El Samsung 990 Pro es uno de los SSD NVMe PCIe 4.0 más rápidos y fiables del mercado, con controlador propio Samsung y memoria V-NAND propia. Ofrece velocidades cercanas al límite del bus PCIe 4.0 y mantiene un rendimiento sostenido gracias a su gestión térmica, siendo una opción habitual tanto para sistema operativo como para librerías de juegos grandes.",
    specGroups: [
      {
        title: "Rendimiento",
        specs: [
          { label: "Capacidad", value: "2 TB" },
          { label: "Interfaz", value: "PCIe 4.0 x4 / NVMe 2.0" },
          { label: "Lectura secuencial", value: "Hasta 7450 MB/s" },
          { label: "Escritura secuencial", value: "Hasta 6900 MB/s" },
        ],
      },
      {
        title: "Fiabilidad",
        specs: [
          { label: "TBW (resistencia)", value: "1200 TB" },
          { label: "Garantía", value: "5 años" },
          { label: "Disipador", value: "Versión con y sin disipador" },
        ],
      },
    ],
    radar: [
      { label: "Velocidad secuencial", value: 96 },
      { label: "Velocidad aleatoria (4K)", value: 92 },
      { label: "Resistencia (TBW)", value: 88 },
      { label: "Gestión térmica", value: 85 },
      { label: "Relación calidad/precio", value: 78 },
      { label: "Garantía", value: 90 },
    ],
    pros: [
      "Entre los SSD PCIe 4.0 más rápidos y consistentes del mercado",
      "Controlador y NAND propios de Samsung, muy fiable",
      "5 años de garantía",
    ],
    cons: [
      "Precio por GB más alto que alternativas genéricas",
      "Puede calentar bajo carga sostenida sin disipador",
    ],
    idealFor: [
      "Unidad principal de sistema operativo y aplicaciones",
      "Librerías de juegos que se benefician de carga rápida",
      "Quien no vaya a dar el salto a PCIe 5.0 todavía",
    ],
    rating: 4.8,
    reviewCount: 4100,
    reviewSummary:
      "Ampliamente recomendado como uno de los SSD más fiables de su generación, con opiniones que destacan la velocidad sostenida y la garantía de 5 años. Algunos compradores señalan que existen alternativas más baratas si no se necesita el máximo rendimiento.",
    featured: true,
    publishedAt: "2026-07-05",
  },
  {
    id: "psu-corsair-rm750e",
    slug: "corsair-rm750e-750w",
    name: "Corsair RM750e 750W 80+ Gold",
    brand: "Corsair",
    category: "psu",
    images: ["/products/psu-corsair-rm750e.svg"],
    price: 99.9,
    currency: "EUR",
    affiliateUrl: "",
    affiliateConfirmed: false,
    shortDescription: "750W modulares y certificación Gold para builds gaming.",
    description:
      "Fuente totalmente modular de 750W con certificación 80+ Gold, pensada para builds gaming de gama media-alta con una GPU como la RTX 4070 Super. Su ventilador de 120mm con modo silencioso a baja carga y sus condensadores japoneses la convierten en una opción fiable y duradera.",
    specGroups: [
      {
        title: "Potencia y eficiencia",
        specs: [
          { label: "Potencia", value: "750 W" },
          { label: "Certificación", value: "80+ Gold" },
          { label: "Modularidad", value: "Totalmente modular" },
        ],
      },
      {
        title: "Construcción",
        specs: [
          { label: "Ventilador", value: "120 mm, modo silencioso" },
          { label: "Condensadores", value: "Japoneses de alta durabilidad" },
          { label: "Garantía", value: "7 años" },
        ],
      },
    ],
    radar: [
      { label: "Eficiencia", value: 88 },
      { label: "Estabilidad de voltajes", value: 90 },
      { label: "Nivel de ruido", value: 85 },
      { label: "Relación calidad/precio", value: 90 },
      { label: "Modularidad", value: 95 },
      { label: "Garantía", value: 88 },
    ],
    pros: [
      "750W de margen cómodo para una RTX 4070 Super o similar",
      "Totalmente modular, facilita el cableado",
      "7 años de garantía",
    ],
    cons: [
      "No es la opción más silenciosa a plena carga",
      "Sin certificación superior (Platinum) para quien busque máxima eficiencia",
    ],
    idealFor: [
      "Builds gaming de gama media-alta con una sola GPU",
      "Quien quiera margen para una futura actualización de GPU",
    ],
    rating: 4.7,
    reviewCount: 1500,
    reviewSummary:
      "Muy recomendada en foros de montaje de PC como equilibrio entre precio y fiabilidad para sistemas con una GPU de gama alta, con opiniones que destacan la facilidad de cableado gracias a la modularidad total.",
    compatibility: { wattageW: 750 },
    featured: false,
    publishedAt: "2026-03-11",
  },
  {
    id: "case-nzxt-h5-flow",
    slug: "nzxt-h5-flow",
    name: "NZXT H5 Flow",
    brand: "NZXT",
    category: "case",
    images: ["/products/case-nzxt-h5-flow.svg"],
    price: 79.9,
    currency: "EUR",
    affiliateUrl: "",
    affiliateConfirmed: false,
    shortDescription: "Caja ATX compacta con panel frontal perforado para flujo de aire.",
    description:
      "Caja de gama media con panel frontal de malla que prioriza el flujo de aire, un diseño minimalista y espacio suficiente para GPUs de gran tamaño y refrigeración líquida de hasta 280mm. Es una de las opciones más recomendadas para builds gaming de tamaño ATX que no quieren gastar de más en el chasis.",
    specGroups: [
      {
        title: "Compatibilidad",
        specs: [
          { label: "Formatos soportados", value: "ATX, Micro-ATX, Mini-ITX" },
          { label: "Longitud máx. GPU", value: "365 mm" },
          { label: "Altura máx. disipador CPU", value: "165 mm" },
          { label: "Radiador máx.", value: "280 mm (frontal)" },
        ],
      },
      {
        title: "Construcción",
        specs: [
          { label: "Ventiladores incluidos", value: "2x 120 mm" },
          { label: "Panel lateral", value: "Cristal templado" },
          { label: "Bahías de almacenamiento", value: "2x 2.5\" + 2x 3.5\"" },
        ],
      },
    ],
    radar: [
      { label: "Flujo de aire", value: 88 },
      { label: "Espacio interno", value: 82 },
      { label: "Facilidad de montaje", value: 85 },
      { label: "Relación calidad/precio", value: 90 },
      { label: "Estética", value: 80 },
      { label: "Insonorización", value: 55 },
    ],
    pros: [
      "Muy buen flujo de aire gracias al frontal de malla",
      "Espacio de sobra para GPUs grandes y AIO de 280mm",
      "Precio muy ajustado para lo que ofrece",
    ],
    cons: [
      "Al priorizar el flujo de aire, es algo más ruidosa que cajas insonorizadas",
      "Gestión de cables mejorable en la parte trasera",
    ],
    idealFor: [
      "Builds gaming ATX de gama media",
      "Quien priorice temperaturas bajas sobre silencio absoluto",
    ],
    rating: 4.6,
    reviewCount: 1750,
    reviewSummary:
      "Elogiada de forma consistente por su relación calidad/precio y el flujo de aire, con menciones frecuentes a lo sencillo que resulta el montaje incluso para usuarios primerizos.",
    compatibility: {
      supportedFormFactors: ["ATX", "Micro-ATX", "Mini-ITX"],
      maxGpuLengthMm: 365,
      maxCoolerHeightMm: 165,
    },
    featured: false,
    publishedAt: "2026-02-22",
  },
  {
    id: "monitor-lg-27gp850",
    slug: "lg-ultragear-27gp850",
    name: "LG UltraGear 27GP850-B",
    brand: "LG",
    category: "monitor",
    images: ["/products/monitor-lg-27gp850.svg"],
    price: 349.0,
    currency: "EUR",
    affiliateUrl: "",
    affiliateConfirmed: false,
    shortDescription: "27\" 1440p Nano IPS a 165Hz, el punto dulce para gaming.",
    description:
      "Monitor de 27 pulgadas con panel Nano IPS a resolución 1440p y 165Hz de tasa de refresco, un tamaño y resolución que encajan perfectamente con GPUs como la RTX 4070 Super. Su tiempo de respuesta de 1ms y compatibilidad con G-Sync/FreeSync lo hacen muy versátil tanto para gaming competitivo como para uso general.",
    specGroups: [
      {
        title: "Panel",
        specs: [
          { label: "Tamaño", value: "27 pulgadas" },
          { label: "Resolución", value: "2560x1440 (1440p)" },
          { label: "Tipo de panel", value: "Nano IPS" },
          { label: "Tasa de refresco", value: "165 Hz" },
          { label: "Tiempo de respuesta", value: "1 ms (GtG)" },
        ],
      },
      {
        title: "Conectividad",
        specs: [
          { label: "Entradas", value: "2x HDMI 2.0, 1x DisplayPort 1.4" },
          { label: "Sincronización adaptativa", value: "NVIDIA G-Sync compatible / AMD FreeSync Premium" },
        ],
      },
    ],
    radar: [
      { label: "Calidad de imagen", value: 88 },
      { label: "Fluidez (Hz)", value: 90 },
      { label: "Tiempo de respuesta", value: 92 },
      { label: "Relación calidad/precio", value: 85 },
      { label: "Ergonomía", value: 80 },
      { label: "Conectividad", value: 75 },
    ],
    pros: [
      "Gran equilibrio entre resolución, tamaño y tasa de refresco",
      "Panel Nano IPS con buen color para creación de contenido",
      "Compatible con G-Sync y FreeSync indistintamente",
    ],
    cons: [
      "El brillo máximo se queda algo corto para HDR real",
      "Solo dos entradas HDMI",
    ],
    idealFor: [
      "Gaming en 1440p con GPUs de gama media-alta",
      "Uso mixto de gaming y trabajo con buen color",
    ],
    rating: 4.7,
    reviewCount: 2900,
    reviewSummary:
      "Uno de los monitores 1440p/165Hz mejor valorados de su franja de precio, con opiniones que destacan el color del panel Nano IPS y la fluidez, aunque algunas reseñas piden más brillo para contenido HDR.",
    featured: true,
    publishedAt: "2026-01-30",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getDeals() {
  return products.filter((p) => p.isDeal);
}

export function getNewArrivals() {
  return [...products]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 6);
}
