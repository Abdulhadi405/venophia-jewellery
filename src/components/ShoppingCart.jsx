import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../hooks/useCart'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function ShoppingCart({ isOpen, onClose }) {
  const { items, removeItem, updateQty } = useCart()
  const whatsappUrl = buildWhatsAppUrl(items)
  return <AnimatePresence>{isOpen && <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
    <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed right-0 top-0 z-50 h-screen w-full max-w-md flex flex-col border-l border-themed bg-primary" aria-label="Selection summary">
      <div className="flex items-center justify-between border-b border-themed p-5"><div><p className="text-[10px] uppercase tracking-[0.25em] text-accent">Your selection</p><h2 className="font-display text-2xl">Enquiry list</h2></div><button onClick={onClose} className="p-2 text-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-label="Close enquiry list">×</button></div>
      <div className="flex-1 overflow-y-auto p-5 space-y-3">
        {!items.length ? <div className="h-full flex flex-col items-center justify-center text-center text-muted"><p className="font-display text-2xl text-foreground">Nothing selected yet</p><p className="text-sm mt-2">Add a genuine product after the catalogue is supplied.</p></div> : items.map(item => <div key={item._cartKey} className="flex gap-3 rounded-xl border border-themed p-3"><div className="w-16 h-16 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-accent font-display text-2xl">{item.name?.[0]}</div><div className="min-w-0 flex-1"><p className="font-medium truncate">{item.name}</p><p className="text-xs text-muted mt-1">{item.selectedVariant || 'Standard variant'}</p><div className="flex items-center gap-2 mt-2"><button onClick={() => updateQty(item._cartKey, item.quantity - 1)} className="h-7 w-7 rounded border border-themed">−</button><span className="text-sm">{item.quantity}</span><button onClick={() => updateQty(item._cartKey, item.quantity + 1)} className="h-7 w-7 rounded border border-themed">+</button><button onClick={() => removeItem(item._cartKey)} className="ml-auto text-xs text-muted hover:text-accent">Remove</button></div></div></div>)}
      </div>
      {items.length > 0 && <div className="border-t border-themed p-5"><p className="text-xs text-muted leading-relaxed mb-4">Opening WhatsApp sends an enquiry only. Venophia will confirm availability, final details and payment separately.</p>{whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={onClose} className="block w-full rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">Continue on WhatsApp</a> : <button disabled className="w-full rounded-xl bg-secondary px-4 py-3 text-sm text-muted">Unavailable for preview items</button>}</div>}
    </motion.aside>
  </>}</AnimatePresence>
}
