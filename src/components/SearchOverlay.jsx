import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  useEffect(() => { if (isOpen) { setQuery(''); setTimeout(() => inputRef.current?.focus(), 0) } }, [isOpen])
  useEffect(() => {
    const close = event => event.key === 'Escape' && onClose()
    if (isOpen) window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [isOpen, onClose])
  if (!isOpen) return null
  const matches = products.filter(product => `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
  return <div className="fixed inset-0 z-[60] bg-black/40 p-4 backdrop-blur-sm" onClick={onClose}><div className="mx-auto mt-16 max-w-xl rounded-2xl border border-themed bg-primary p-4" onClick={event => event.stopPropagation()}><div className="flex gap-3"><span className="text-accent">⌕</span><input ref={inputRef} value={query} onChange={event => setQuery(event.target.value)} placeholder="Search earrings, necklaces…" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted" /></div>{query && <div className="mt-4 border-t border-themed pt-2">{matches.length ? matches.map(product => <Link key={product.id} to={`/product/${product.id}`} onClick={onClose} className="block rounded-lg px-3 py-3 text-sm hover:bg-secondary"><span className="text-accent">{product.category}</span><span className="ml-3">{product.name}</span></Link>) : <p className="px-3 py-4 text-sm text-muted">No preview matches found.</p>}</div>}</div></div>
}
