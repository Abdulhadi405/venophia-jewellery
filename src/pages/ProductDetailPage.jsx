import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { getProductById } from '../data/products'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  if (!product) return <div className="px-5 py-40 text-center"><h1 className="font-display text-4xl">Piece not found</h1><Link to="/shop" className="mt-6 inline-block text-accent">Back to the edit →</Link></div>
  const addPreview = () => { if (product.available && !product.previewOnly) addItem(product, '', '') }
  return <div className="px-5 pb-20 pt-32 sm:px-8"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2"><div className="flex aspect-square items-center justify-center rounded-3xl border border-themed" style={{ background: 'radial-gradient(circle, rgba(181,142,92,.18), transparent 65%)' }}><div className="text-center"><span className="font-display text-[12rem] italic text-accent/70">V</span><p className="text-[10px] uppercase tracking-[.3em] text-muted">Design preview</p></div></div><div className="flex flex-col justify-center"><p className="text-[10px] uppercase tracking-[.3em] text-accent">{product.category}</p><h1 className="mt-3 font-display text-5xl">{product.name}</h1><p className="mt-6 text-sm leading-7 text-muted">{product.description}</p><div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-sm text-muted">This is a design preview, not saleable inventory. Real product details, photography and pricing will be added after sourcing.</div>{product.available ? <button onClick={addPreview} className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">Add to enquiry list</button> : <button disabled className="mt-8 cursor-not-allowed rounded-full bg-secondary px-6 py-3 text-sm text-muted">Enquiry unavailable for preview</button>}<Link to={`/shop/${product.category}`} className="mt-5 text-sm text-accent">← Back to {product.category}</Link></div></div></div>
}
