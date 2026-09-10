export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="trace-divider mb-8" />
        <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
          Zócalo/PC participa en el Programa de Afiliados de Amazon EU, un
          programa de publicidad para afiliados diseñado para ofrecer a los
          sitios web un modo de obtener comisiones por publicidad, publicitando
          e incluyendo enlaces a Amazon.es. Los precios mostrados son
          orientativos y pueden variar; consulta siempre el precio final en
          Amazon antes de comprar.
        </p>
        <p className="mt-6 font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} Zócalo/PC — comparativas de hardware
        </p>
      </div>
    </footer>
  );
}
