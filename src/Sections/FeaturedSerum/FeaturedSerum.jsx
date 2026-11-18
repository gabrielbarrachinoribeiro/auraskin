import { ArrowUpRight } from 'lucide-react'
import serumImage from '../../assets/serum.jpg'
import { products } from '../../data/products'

const serum = products.find(({ id }) => id === 'serum')

function FeaturedSerum({ onProductOpen }) {
  return (
    <section id="destaque" aria-labelledby="featured-serum-title" className="bg-[#a8b5a2] py-16 text-[#283b32] lg:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-[75.5rem] items-center gap-12 md:grid-cols-2 lg:gap-20">
          <figure className="relative">
            <img
              src={serumImage}
              alt="Frasco de sérum âmbar com conta-gotas preto sobre uma pedra clara"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-3xl bg-[#d6dacd] object-cover"
            />
            <figcaption className="absolute bottom-0 left-6 translate-y-1/2 rounded-full bg-[#f8f6f1] px-5 py-2 text-[10px] uppercase tracking-[0.2em]">
              Favorito da casa
            </figcaption>
          </figure>

          <div className="w-full max-w-md md:justify-self-end">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#3e554a]">Em destaque</p>
            <h2 id="featured-serum-title" className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Sérum Hidratante
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#354a40] sm:text-lg">
              Para quem acorda com a pele pedindo água. Três gotas de textura fluida que se espalham rápido e devolvem a sensação de conforto, sem camada pesada e sem espera para vestir o dia.
            </p>
            <ul className="mt-7 list-disc space-y-2 pl-4 text-base leading-relaxed text-[#354a40] marker:text-[#51675a]">
              <li>Textura fluida de rápida absorção</li>
              <li>Sensação de conforto ao longo do dia</li>
              <li>Acabamento natural, sem brilho</li>
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button type="button" aria-haspopup="dialog" onClick={() => onProductOpen(serum)} className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#283b32] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#3c5547] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283b32]">
                Conheça o produto
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
              <p className="font-serif text-2xl">R$ 168</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSerum
