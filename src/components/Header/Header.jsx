import { useEffect, useRef, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const iconButton = 'flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#283b32]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283b32]'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const menuButton = useRef(null)
  const searchButton = useRef(null)
  const searchInput = useRef(null)

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus({ preventScroll: true })
  }, [searchOpen])

  function closePanels(event) {
    if (event.key !== 'Escape') return
    if (searchOpen) searchButton.current?.focus()
    else if (menuOpen) menuButton.current?.focus()
    setMenuOpen(false)
    setSearchOpen(false)
  }

  return (
    <header className="relative border-t-2 border-t-[#283b32] border-b border-b-[#283b32]/10 bg-[#f8f6f1] text-[#283b32]" onKeyDown={closePanels}>
      <div className="container mx-auto grid grid-cols-[1fr_auto] items-center gap-x-4 px-6 lg:grid-cols-[auto_1fr_auto_auto]">
        <div className="contents">
          <a href="#inicio" aria-label="Aura Skin — início" className="flex h-20 w-fit items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283b32]">
            <span className="inline-flex items-baseline">
              <span className="font-serif text-3xl leading-none tracking-tight">aura<span className="text-[#283b32]/60">.</span></span>
              <span className="text-xs font-medium uppercase leading-none tracking-widest">skin</span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center justify-center gap-6 lg:flex xl:gap-10">
            {links.map(({ label, href }) => (
              <a key={href} href={href} className="relative rounded-sm py-3 text-xs font-normal uppercase tracking-[0.18em] text-[#283b32]/70 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#283b32]/60 after:transition-transform after:duration-300 hover:text-[#283b32] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#283b32]">
                {label}
              </a>
            ))}
          </nav>

          <div className="col-start-2 row-start-1 flex items-center gap-1 justify-self-end sm:gap-2 lg:col-start-4">
            <button ref={searchButton} type="button" className={iconButton} aria-label={searchOpen ? 'Fechar busca' : 'Abrir busca'} aria-expanded={searchOpen} aria-controls="header-search" onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false) }}>
              {searchOpen ? <X size={19} strokeWidth={1.4} /> : <Search size={19} strokeWidth={1.4} />}
            </button>
            <a href="#sacola" className={iconButton} aria-label="Sacola de compras">
              <ShoppingBag size={19} strokeWidth={1.4} />
            </a>
            <button ref={menuButton} type="button" className={`${iconButton} lg:hidden`} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="header-mobile-menu" onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false) }}>
              {menuOpen ? <X size={21} strokeWidth={1.4} /> : <Menu size={21} strokeWidth={1.4} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="header-mobile-menu" aria-label="Navegação móvel" className="col-span-full flex flex-col border-t border-[#283b32]/15 py-3 lg:hidden">
            {links.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-4 text-xs uppercase tracking-[0.18em] text-[#283b32]/70 transition-all duration-200 hover:translate-x-1 hover:bg-[#283b32]/5 hover:text-[#283b32] motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-[#283b32]">
                {label}
              </a>
            ))}
          </nav>
        )}

        <div id="header-search" inert={!searchOpen} aria-hidden={!searchOpen} className={`col-span-full grid min-w-0 transition-[grid-template-rows,opacity,width] duration-500 ease-in-out lg:col-span-1 lg:col-start-3 lg:row-start-1 ${searchOpen ? 'grid-rows-[1fr] opacity-100 lg:w-56 xl:w-80' : 'grid-rows-[0fr] opacity-0 lg:w-0'}`}>
          <div className="min-h-0 overflow-hidden">
            <form role="search" action="/" className={`w-full origin-top pb-4 pt-1 transition-[opacity,translate,scale,filter] duration-500 ease-in-out lg:w-56 lg:origin-right lg:py-0 xl:w-80 ${searchOpen ? 'translate-x-0 translate-y-0 scale-100 opacity-100 blur-none' : '-translate-y-4 scale-90 opacity-0 blur-sm lg:translate-x-8 lg:translate-y-0'}`}>
              <label htmlFor="header-search-input" className="sr-only">Buscar produtos</label>
              <div className="flex h-11 items-center rounded-full border border-[#283b32]/15 bg-white/60 pl-4 pr-1 transition-colors duration-200 hover:border-[#283b32]/30 focus-within:border-[#283b32]/45 focus-within:bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#283b32]/10">
                <input ref={searchInput} id="header-search-input" name="q" type="search" required placeholder="Buscar produtos…" className="min-w-0 flex-1 rounded-full bg-transparent text-base text-[#283b32] placeholder:text-[#283b32]/50 focus:outline-none sm:text-sm" />
                <button type="submit" className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#283b32]/70 transition-colors duration-200 hover:bg-[#283b32]/10 hover:text-[#283b32] focus-visible:outline-2 focus-visible:outline-[#283b32]" aria-label="Buscar"><Search size={17} strokeWidth={1.5} /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
