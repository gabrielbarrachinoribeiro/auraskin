import { ArrowUpRight } from 'lucide-react'

const botanicalImage = 'https://images.unsplash.com/photo-1574002332972-fd2e0f7f1ea9?auto=format&fit=crop&w=1800&q=85'
const productImage = 'https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6633f5b87d126b132acd58c0_web_sesan_updyke_r1_0125.webp'

function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate bg-[#f8f6f1] text-[#283b32]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-center py-14 sm:py-16 lg:min-h-192 lg:w-1/2 lg:py-24 lg:pr-10 xl:pr-16">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#283b32]/65 sm:mb-8">Skincare essencial</p>
          <h1 id="hero-title" className="font-serif text-4xl font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="block whitespace-nowrap">Sua pele.</span>
            <span className="block whitespace-nowrap italic">Seu momento.</span>
          </h1>
          <p className="mt-7 text-base leading-relaxed text-[#283b32]/80 sm:mt-9 sm:text-lg">
            O essencial para transformar o cuidado diário em um ritual de bem-estar.
          </p>
          <a href="#produtos" className="group mt-8 inline-flex items-center justify-center gap-4 rounded-full bg-[#283b32] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#f8f6f1] transition-colors duration-300 hover:bg-[#3c5547] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283b32] sm:mt-9 sm:px-7">
            Explore nossos produtos
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </a>
        </div>
      </div>

      <div className="relative h-112 overflow-hidden bg-[#859078] sm:h-136 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
        <img src={botanicalImage} alt="Textura natural de uma folha em tons verdes" width="1200" height="1400" fetchPriority="high" className="h-full w-full object-cover object-center" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#748064]/25 mix-blend-color" />
        <div className="absolute right-6 bottom-6 h-56 w-44 overflow-hidden rounded-sm bg-[#f8f6f1] shadow-xl sm:right-10 sm:bottom-10 sm:h-72 sm:w-56 xl:right-14 xl:bottom-14 xl:h-80 xl:w-64">
          <img src={productImage} alt="Frasco verde de skincare em uma composição com plantas e pedra natural" width="512" height="640" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Hero
