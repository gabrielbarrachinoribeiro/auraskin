function About() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="bg-white pt-16 pb-12 text-center text-[#283b32] sm:pt-24 sm:pb-16">
      <div className="container mx-auto px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#53695f]">
          Nossa filosofia
        </p>
        <h2 id="about-title" className="mx-auto mt-7 max-w-[44rem] text-balance font-serif text-3xl font-normal leading-[1.12] tracking-tight sm:text-5xl">
          Cuidar da pele é, antes de tudo, uma forma de <em>cuidar de você</em>.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#53695f] sm:mt-10 sm:text-lg">
          A AURA Skin nasceu de uma ideia simples: o cuidado diário não precisa
          ser complicado. Criamos poucos produtos, pensados para funcionar
          juntos, com texturas leves e gestos que cabem na sua rotina — para
          que cada aplicação pareça uma pausa, e não mais uma tarefa.
        </p>
        <ul aria-label="Valores da AURA Skin" className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.28em] text-[#5d7167] sm:mt-12 sm:gap-x-6 sm:text-[11px]">
          <li>Simplicidade</li>
          <li className="flex items-center gap-x-3 sm:gap-x-6">
            <span aria-hidden="true" className="size-1 rounded-full bg-[#a5b4a6]" />
            Autocuidado
          </li>
          <li className="flex items-center gap-x-3 sm:gap-x-6">
            <span aria-hidden="true" className="size-1 rounded-full bg-[#a5b4a6]" />
            Bem-estar
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
