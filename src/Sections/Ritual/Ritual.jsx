const steps = [
  {
    number: '01',
    tagline: 'Comece leve',
    title: 'Limpar',
    description: 'Uma limpeza gentil pela manhã e ao fim do dia. É o gesto que abre espaço para tudo o que vem depois: a pele limpa, o ritmo desacelerado.',
    photoId: '9246307',
    alt: 'Mulher massageando espuma de limpeza no rosto',
  },
  {
    number: '02',
    tagline: 'Devolva conforto',
    title: 'Hidratar',
    description: 'Sérum e creme em camadas finas. Texturas que se somam em poucos segundos e deixam a pele macia, com aquele aspecto de quem dormiu bem.',
    photoId: '9774611',
    alt: 'Mãos retirando creme hidratante de um pote aberto',
  },
  {
    number: '03',
    tagline: 'Feche o ritual',
    title: 'Proteger',
    description: 'O protetor como último passo, todos os dias. Um hábito simples que fecha o seu momento de cuidado e acompanha você para o resto do dia.',
    photoId: '8919456',
    alt: 'Rosto iluminado pelo sol em meio à vegetação',
  },
]

function Ritual() {
  return (
    <section id="ritual" aria-labelledby="ritual-title" className="bg-[#efece4] py-16 text-[#283b32] lg:py-30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-[75.5rem]">
          <header className="mb-10 max-w-lg lg:mb-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#53695f]">Seu ritual</p>
            <h2 id="ritual-title" className="mt-5 max-w-md font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Três gestos. Nada além do necessário.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#53695f] sm:text-lg">
              De manhã e à noite, os mesmos passos, sempre na mesma ordem. Alguns minutos que desaceleram o dia e deixam a pele confortável.
            </p>
          </header>

          <ol role="list" className="grid gap-14 lg:gap-24">
            {steps.map(({ number, tagline, title, description, photoId, alt }) => (
              <li key={number} className="group grid items-center gap-7 md:grid-cols-2 lg:gap-20">
                <img
                  src={`https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=1200`}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                  className="aspect-[4/3] w-full rounded-3xl bg-[#e2ded3] object-cover md:group-even:col-start-2 md:group-even:row-start-1"
                />
                <div className="w-full max-w-md md:group-even:col-start-1 md:group-even:row-start-1 md:group-even:justify-self-end md:group-even:text-right">
                  <div className="flex items-center gap-4 md:group-even:justify-end">
                    <span className="font-serif text-3xl leading-none text-[#64766c]">{number}</span>
                    <span aria-hidden="true" className="h-px w-12 bg-[#283b32]/25" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#53695f]">{tagline}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">{title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#53695f]">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Ritual
