import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import './ProductDrawer.css'

const labelStyle = 'text-[10px] font-medium uppercase tracking-[0.24em] text-[#53695f]'

function ProductDrawer({ product, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    if (product && !dialog.current.open) dialog.current.showModal()
  }, [product])

  return (
    <dialog
      ref={dialog}
      id="product-details"
      aria-labelledby="product-details-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
      className="product-drawer bg-[#f8f6f1] text-[#283b32] shadow-2xl"
    >
      {product && (
        <div key={product.id} className="product-drawer-layout">
          <header className="flex shrink-0 items-center justify-between px-6 py-3">
            <span className={labelStyle}>Aura Skin</span>
            <form method="dialog">
              <button type="submit" aria-label="Fechar detalhes" className="grid size-10 cursor-pointer place-items-center rounded-full hover:bg-[#283b32]/10 focus-visible:outline-2">
                <X size={16} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </form>
          </header>
          <div className="product-drawer-content">
            <img src={product.image} alt={product.alt} className="product-drawer-image" />
            <div className="product-drawer-details px-6">
              <p className={labelStyle}>{product.tagline}</p>
              <h2 id="product-details-title" className="mt-3 font-serif text-3xl leading-tight">{product.name}</h2>
              <p className="mt-3 flex items-baseline gap-3 text-lg">
                {product.price}
                {product.size && <span className={labelStyle}>{product.size}</span>}
              </p>
              <p className="mt-5 leading-relaxed text-[#53695f]">{product.description}</p>
              <h3 className={`mt-8 ${labelStyle}`}>Benefícios</h3>
              <ul className="mt-3 list-disc space-y-2.5 pl-4 leading-relaxed text-[#53695f] marker:text-[#81927e]">
                {product.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
              </ul>
              <h3 className={`mt-8 ${labelStyle}`}>Como usar</h3>
              <p className="mt-3 leading-relaxed text-[#53695f]">{product.usage}</p>
              <a href="mailto:ola@auraskin.com" className="product-drawer-contact mt-9 flex items-center justify-center rounded-full bg-[#283b32] px-6 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#3c5547] focus-visible:outline-2 focus-visible:outline-offset-4">
                Falar com a Aura
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default ProductDrawer
