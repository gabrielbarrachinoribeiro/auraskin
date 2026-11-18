import { Feather, Heart, Sparkles } from 'lucide-react'

const principles = [
  {
    icon: Sparkles,
    title: 'Fórmulas pensadas nos detalhes',
    description: 'Poucos ingredientes, texturas leves e uma atenção real ao que a pele pede no dia a dia — do primeiro uso ao último.',
  },
  {
    icon: Feather,
    title: 'Rotina descomplicada',
    description: 'Três passos, sempre na mesma ordem. Sem camadas infinitas, sem regras difíceis de seguir em uma semana corrida.',
  },
  {
    icon: Heart,
    title: 'Compromisso com o autocuidado',
    description: 'Cada produto existe para criar pausa: alguns minutos por dia que são só seus, com a pele e com você.',
  },
]

function Essence() {
  return (
    <section id="essencia" aria-labelledby="essence-title" className="bg-[#f8f6f1] py-16 text-[#283b32] lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-[75.5rem] gap-10 md:grid-cols-2 lg:gap-20">
          <header className="max-w-sm">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#53695f]">Nossa essência</p>
            <h2 id="essence-title" className="mt-5 max-w-xs font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              O que guia cada fórmula.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-[#53695f]">
              AURA nasceu para quem está construindo a própria rotina: pele que pede hidratação, dias cheios e a vontade de cuidar de si sem complicar.
            </p>
          </header>

          <ul role="list" className="grid max-w-lg gap-8 lg:gap-9">
            {principles.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4 sm:gap-6">
                <Icon aria-hidden="true" size={24} strokeWidth={1.25} className="mt-0.5 shrink-0 text-[#53695f]" />
                <div>
                  <h3 className="font-serif text-xl leading-snug">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#53695f]">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Essence
