import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

function NewsletterCTA() {
  const [showStatus, setShowStatus] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setShowStatus(true)
  }

  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="bg-[#e6d8c6] py-16 text-center text-[#283b32] sm:py-24">
      <div className="container mx-auto px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#455a50]">Newsletter</p>
        <h2 id="newsletter-title" className="mx-auto mt-5 max-w-lg text-balance font-serif text-4xl leading-[1.12] tracking-tight sm:text-[2.75rem]">
          Um pouco mais de cuidado na sua rotina.
        </h2>
        <form onSubmit={handleSubmit} aria-describedby="newsletter-note" className="mx-auto mt-9 flex max-w-lg flex-col gap-3 sm:flex-row sm:gap-4">
          <label htmlFor="newsletter-email" className="sr-only">Seu e-mail</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="seu@email.com"
            className="min-h-13 w-full min-w-0 flex-1 rounded-full border border-[#68786d] bg-[#fdfbf7] px-5 text-base text-[#283b32] placeholder:text-[#53695f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#283b32]"
          />
          <button type="submit" className="inline-flex min-h-13 shrink-0 cursor-pointer items-center justify-center gap-3 rounded-full bg-[#283b32] px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#3c5547] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283b32]">
            Inscrever-se
            <ArrowUpRight size={14} aria-hidden="true" />
          </button>
        </form>
        <p id="newsletter-note" className="mt-5 text-xs tracking-wide text-[#455a50]">
          Sem excesso de mensagens. Só o que vale a pena.
        </p>
        <p role="status" className="text-sm text-[#283b32]">
          {showStatus && <span className="mt-3 block">As inscrições estarão disponíveis em breve.</span>}
        </p>
      </div>
    </section>
  )
}

export default NewsletterCTA
