import { Camera, Play } from 'lucide-react'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const socials = [
  { label: 'Instagram', icon: Camera },
  { label: 'Facebook', icon: FacebookMark },
  { label: 'YouTube', icon: Play },
]

const linkStyle = 'rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
const currentYear = new Date().getFullYear()

function FacebookMark() {
  return <span aria-hidden="true" className="font-sans text-sm font-semibold leading-none">f</span>
}

function Footer() {
  return (
    <footer id="contato" className="bg-[#25382f] pt-12 pb-10 text-[#cbd4cc] sm:pt-14">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-[75.5rem]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#inicio" aria-label="Aura Skin — início" className={`${linkStyle} inline-block font-serif text-lg tracking-[0.35em] text-[#f8f6f1]`}>
                AURA
              </a>
              <p className="mt-5 max-w-xs text-sm leading-relaxed sm:text-base">
                Skincare essencial para transformar o cuidado diário em um ritual de bem-estar.
              </p>
              <ul aria-label="Redes sociais" className="mt-7 flex gap-3">
                {socials.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <a href="#" onClick={(event) => event.preventDefault()} aria-label={label} className="grid size-10 place-items-center rounded-full border border-[#cbd4cc]/35 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                      <Icon size={15} strokeWidth={1.4} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Navegação do rodapé">
              <h2 className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#a8b5a2]">Navegar</h2>
              <ul className="mt-5 space-y-3 text-sm sm:text-base">
                {links.map(({ label, href }) => (
                  <li key={href}><a href={href} className={linkStyle}>{label}</a></li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#a8b5a2]">Contato</h2>
              <address className="mt-5 space-y-3 text-sm not-italic sm:text-base">
                <a href="mailto:ola@auraskin.com" className={linkStyle}>ola@auraskin.com</a>
                <p>Seg a sex, 9h às 18h</p>
                <p>São Paulo, Brasil</p>
              </address>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[#cbd4cc]/25 pt-6 text-xs text-[#a8b5a2] sm:flex-row sm:justify-between">
            <p>© {currentYear} AURA Skin. Todos os direitos reservados.</p>
            <p>AURA Skin Cosméticos · São Paulo, Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
