import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/products'
export default function CollectionsPage() {
  return <div className="px-5 pb-20 pt-32 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-[10px] uppercase tracking-[.3em] text-accent">Explore the forms</p><h1 className="mt-3 font-display text-5xl">Collections</h1><p className="mt-4 max-w-lg text-sm leading-7 text-muted">Four simple starting points for the Venophia edit. The catalogue will be populated with genuine pieces after sourcing.</p><div className="mt-12 grid gap-4 md:grid-cols-2">{categories.map((category, index) => <Link key={category.id} to={`/shop/${category.id}`} className="group rounded-3xl border border-themed p-8 transition hover:border-accent/60 hover:bg-secondary"><span className="font-display text-7xl italic text-accent/70">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-14 font-display text-3xl group-hover:text-accent">{category.label}</h2><p className="mt-2 text-sm text-muted">View design previews →</p></Link>)}</div></div></div>
}
