import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useWishlist } from '../hooks/useWishlist'

const links = [{ to: '/shop', label: 'Shop' }, { to: '/collections', label: 'Collections' }, { to: '/about', label: 'Our Story' }, { to: '/contact', label: 'Contact' }]

export default function Header({ onCartClick, onWishlistClick, onSearchClick }) {
  const { itemCount } = useCart()
  const { wishlistCount } = useWishlist()
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="fixed top-0 z-50 w-full border-b border-transparent bg-primary/80 backdrop-blur-xl">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
      <Link to="/" className="group flex items-center gap-2" aria-label="Venophia home">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 font-display text-xl italic text-accent">V</span>
        <span><span className="block font-display text-2xl tracking-wide group-hover:text-accent transition-colors">Venophia</span><span className="block text-[9px] uppercase tracking-[0.3em] text-muted">Jewellery</span></span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {links.map(link => <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-muted'}`}>{link.label}</NavLink>)}
      </nav>
      <div className="flex items-center gap-1">
        <button onClick={onSearchClick} className="rounded-full p-2 text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-label="Search"><span aria-hidden>⌕</span></button>
        <button onClick={onWishlistClick} className="relative rounded-full p-2 text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-label="Wishlist">♡{wishlistCount > 0 && <span className="absolute -right-0.5 -top-0.5 text-[9px]">{wishlistCount}</span>}</button>
        <button onClick={onCartClick} className="relative rounded-full p-2 text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-label="Open enquiry list">▢{itemCount > 0 && <span className="absolute -right-0.5 -top-0.5 text-[9px]">{itemCount}</span>}</button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="ml-1 rounded-full p-2 text-muted md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-expanded={menuOpen} aria-label="Toggle menu">☰</button>
      </div>
    </div>
    {menuOpen && <nav className="border-t border-themed bg-primary px-5 py-4 md:hidden" aria-label="Mobile navigation">{links.map(link => <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="block border-b border-themed py-3 text-sm text-muted last:border-0">{link.label}</NavLink>)}</nav>}
  </header>
}
