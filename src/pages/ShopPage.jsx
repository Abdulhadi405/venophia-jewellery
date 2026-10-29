import React, { useMemo, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories } from '../data/products'
import { useProducts } from '../hooks/useProducts'

export default function ShopPage() {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [sort, setSort] = useState('category')
  const { products } = useProducts({ category, query })
  const visible = useMemo(() => [...products].sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)), [products, sort])
  const title = categories.find(item => item.id === category)?.label || 'Shop the edit'
  return <div className="px-5 pb-20 pt-32 sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-[10px] uppercase tracking-[.3em] text-accent">Venophia catalogue</p><h1 className="mt-3 font-display text-5xl">{title}</h1><p className="mt-3 max-w-xl text-sm text-muted">Preview pieces are clearly labelled until genuine inventory is supplied.</p><div className="mt-10 flex flex-col gap-3 border-y border-themed py-4 sm:flex-row"><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search the preview catalogue" className="flex-1 rounded-xl border border-themed bg-transparent px-4 py-3 text-sm outline-none focus:border-accent" /><select value={sort} onChange={event => setSort(event.target.value)} className="rounded-xl border border-themed bg-primary px-4 py-3 text-sm outline-none focus:border-accent"><option value="category">Sort by category</option><option value="name">Sort by name</option></select></div><div className="mt-6 flex flex-wrap gap-2"><a href="/shop" className={`rounded-full border px-4 py-2 text-xs ${!category ? 'border-accent text-accent' : 'border-themed text-muted'}`}>All</a>{categories.map(item => <a key={item.id} href={`/shop/${item.id}`} className={`rounded-full border px-4 py-2 text-xs ${category === item.id ? 'border-accent text-accent' : 'border-themed text-muted'}`}>{item.label}</a>)}</div>{visible.length ? <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visible.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="py-24 text-center text-muted">No preview pieces match your search.</div>}</div></div>
}
