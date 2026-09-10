# Zócalo/PC — comparativas de hardware (Amazon España)

Web de afiliados de Amazon España sobre PCs por piezas: fichas técnicas
completas, comparador lado a lado, configurador con detección de
incompatibilidades, guías SEO y configuraciones recomendadas por
presupuesto.

Construida con **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.
Todo el contenido nace de un **modelo de datos central** (`src/data/`),
así que añadir productos nuevos NO requiere tocar ninguna página: en
cuanto un producto está en `src/data/products.ts`, aparece
automáticamente en su categoría, en el comparador, en el configurador
(si aplica) y en las páginas de novedades/destacados/ofertas según sus
flags.

## Arranque en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura del proyecto

```
src/
  types/product.ts       -> Modelo de datos (Product, CategoryDef, specs, radar...)
  data/
    categories.ts        -> Las 24 categorías (componentes + periféricos)
    products.ts           -> Catálogo de productos (AQUÍ se añaden productos nuevos)
    guides.ts              -> Guías de compra / contenido SEO
    budgetBuilds.ts        -> Configuraciones recomendadas por presupuesto/uso
  lib/
    compatibility.ts       -> Motor de reglas del configurador (socket, RAM, PSU, caja...)
  components/               -> Piezas de UI reutilizables (ProductCard, BuyButton, radar...)
  app/
    page.tsx                -> Home
    categoria/[slug]/        -> Listado por categoría
    producto/[slug]/         -> Ficha de producto completa
    comparador/               -> Comparador interactivo
    configurador/             -> Configurador de PC
    guias/, guias/[slug]/     -> Guías SEO
    builds/, builds/[slug]/   -> Configuraciones por presupuesto
    ofertas/                  -> Ofertas destacadas
```

## Cómo añadir un producto nuevo

1. Abre `src/data/products.ts`.
2. Copia un objeto `Product` existente de una categoría parecida como
   plantilla.
3. Rellena `slug` (único, usado en la URL `/producto/tu-slug`),
   `category` (debe existir en `src/data/categories.ts`), specs,
   `radar` (6 ejes de 0 a 100), pros/contras, `affiliateUrl` con tu
   enlace de afiliado de Amazon y `affiliateConfirmed: true`.
4. Si el producto participa en el configurador (CPU, placa base, RAM,
   GPU, PSU o caja), rellena también el objeto `compatibility` con los
   campos relevantes (`socket`, `ramType`, `tdpW`, `wattageW`,
   `maxGpuLengthMm`, etc.) — de ahí saca sus reglas el configurador.
5. Guarda. No hace falta tocar ninguna página: el producto ya aparece
   en su categoría y, si tiene `featured`, `isDeal` o `isNew`
   apropiados, también en home/ofertas/novedades.

Cuando tengas muchos enlaces de afiliado que añadir, lo más cómodo es
pedirle a Claude que genere los objetos `Product` en bloque a partir de
la lista de enlaces + los nombres de los productos.

## Sobre "extraer datos de Amazon" y la actualización automática

Amazon bloquea el acceso automatizado a sus páginas de producto (esto
también afecta a Claude), así que no hay scraping en vivo integrado.
El flujo recomendado es:

1. Pasas el enlace de afiliado + el nombre/modelo del producto.
2. Se completan las especificaciones con fuentes públicas (web del
   fabricante, tiendas especializadas, reseñas) y se añaden a
   `products.ts`.

Para una actualización realmente automática (nuevas ofertas, precios,
"novedades") en producción, lo habitual es:

- Una **tarea programada** (cron) fuera de esta sesión de chat —por
  ejemplo un GitHub Action diario— que llame a la API de Producto
  Publicidad de Amazon (PA-API) con tus credenciales de afiliado para
  refrescar precios y detectar bajadas.
- Ese proceso reescribe `src/data/products.ts` (o una base de datos) y
  dispara un nuevo despliegue.

Esta base ya está lista para enchufar ese proceso: solo hay que
sustituir el array estático de `products.ts` por una lectura desde tu
fuente de datos (API, base de datos o CMS) cuando lo tengas montado.

## Desplegar

El proyecto es un Next.js estándar, así que se despliega en cualquier
plataforma compatible en un par de clics:

- **Vercel** (recomendado, mismo equipo que mantiene Next.js):
  `vercel` desde la carpeta del proyecto, o conectar el repo de GitHub
  desde vercel.com/new.
- **Netlify**: conectar el repo, framework `Next.js` autodetectado.

Sube primero el proyecto a un repositorio de GitHub y conéctalo a la
plataforma elegida para obtener tu dominio temporal (`*.vercel.app` o
`*.netlify.app`) en minutos.

## Estado actual de los 3 enlaces de afiliado de prueba

Los 3 enlaces (`amzn.to/3QjWDr7`, `amzn.to/4w6SAgS`, `amzn.to/3SXpS3C`)
están asignados provisionalmente a un CPU, una GPU y un SSD de ejemplo
con `affiliateConfirmed: false`. En cuanto confirmes qué producto
exacto es cada uno, se actualizan sus fichas técnicas y se marca como
confirmado.
