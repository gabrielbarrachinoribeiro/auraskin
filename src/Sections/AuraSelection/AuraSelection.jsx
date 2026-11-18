import { ArrowUpRight } from 'lucide-react'
import { products } from '../../data/products'

function ProductCard({ product, onProductOpen }) {
  const { id, name, tagline, price, description, image, alt } = product

  return (
    <article id={id} className="scroll-mt-6 lg:even:mt-14">
      <a
        href="#product-details"
        aria-haspopup="dialog"
        aria-label={`Ver detalhes de ${name}`}
        onClick={(event) => {
          event.preventDefault()
          onProductOpen(product)
        }}
        className="group block cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <div className="overflow-hidden rounded-3xl bg-[#ece7de]">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover [transform:scale(1)] transition-[transform] duration-300 ease-in-out group-hover:[transform:scale(1.1)] group-focus-visible:[transform:scale(1.1)]"
          />
        </div>
        <p className="mt-6 text-[10px] uppercase tracking-[0.24em] text-[#53695f]">{tagline}</p>
        <div className="mt-3 flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-xl leading-snug">{name}</h3>
          <p className="shrink-0 text-sm text-[#53695f]">{price}</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#53695f]">{description}</p>
        <span className="mt-5 inline-flex items-center gap-2 border-b border-[#283b32]/25 pb-1.5 text-[10px] uppercase tracking-[0.2em] group-hover:border-[#283b32] group-focus-visible:border-[#283b32]">
          Ver detalhes <ArrowUpRight size={13} aria-hidden="true" />
        </span>
      </a>
    </article>
  )
}

function AuraSelection({ onProductOpen }) {
  return (
    <section id="produtos" aria-labelledby="aura-selection-title" className="bg-[#f8f6f1] pt-14 pb-20 text-[#283b32] lg:pb-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-[75.5rem]">
          <header className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#53695f]">Seleção Aura</p>
              <h2 id="aura-selection-title" className="mt-5 max-w-sm font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Quatro essenciais para a sua pele.
              </h2>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-[#53695f] sm:text-right">
              Uma rotina curta, feita para durar. Comece por onde a sua pele pedir.
            </p>
          </header>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => <ProductCard key={product.id} product={product} onProductOpen={onProductOpen} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuraSelection
