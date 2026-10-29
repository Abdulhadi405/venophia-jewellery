import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useWishlist } from '../hooks/useWishlist'
import { useState } from 'react'

const categoryLabel = value => value.charAt(0).toUpperCase() + value.slice(1)

export default function ProductCard({ product }) {
  const { isWishlisted, toggleItem } = useWishlist()
  const [imageFailed, setImageFailed] = useState(false)
  const saved = isWishlisted(product.id)
  return (
    <motion.article whileHover={{ y: -4 }} className="group rounded-2xl overflow-hidden card-depth" style={{ background: 'var(--surface-item-card)', border: '1px solid var(--border-default)' }}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden" style={{ background: 'linear-gradient(145deg, var(--surface-input), var(--surface-categories))' }}>
          {product.image && !imageFailed ? <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" onError={() => setImageFailed(true)} /> : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-accent/70">
              <span className="font-display text-6xl italic">V</span>
              <span className="text-[10px] uppercase tracking-[0.3em] mt-2">Design preview</span>
            </div>
          )}
          <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-primary/80 text-accent border border-accent/20">Preview</span>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">{categoryLabel(product.category)}</p>
            <Link to={`/product/${product.id}`} className="font-display text-xl font-semibold hover:text-accent transition-colors">{product.name}</Link>
          </div>
          <button type="button" onClick={() => toggleItem(product)} className="text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-full p-1" aria-label={saved ? 'Remove from wishlist' : 'Save preview to wishlist'}>
            <span className="text-lg">{saved ? '♥' : '♡'}</span>
          </button>
        </div>
        <p className="text-xs text-muted mt-3 leading-relaxed">{product.description}</p>
        <p className="text-xs text-muted/80 mt-4">Pricing and availability will be added after sourcing.</p>
      </div>
    </motion.article>
  )
}
