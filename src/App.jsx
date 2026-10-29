import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './hooks/useCart'
import { ThemeProvider } from './hooks/useTheme'
import { WishlistProvider } from './hooks/useWishlist'
import Header from './components/Header'
import Footer from './components/Footer'
import ShoppingCart from './components/ShoppingCart'
import WishlistPanel from './components/WishlistPanel'
import SearchOverlay from './components/SearchOverlay'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CollectionsPage from './pages/CollectionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  useEffect(() => {
    const handler = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(open => !open)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return <ThemeProvider><WishlistProvider><CartProvider>
    <ScrollToTop />
    <div className="relative z-10 min-h-screen overflow-x-hidden text-foreground flex flex-col">
      <Header onCartClick={() => setCartOpen(true)} onWishlistClick={() => setWishlistOpen(true)} onSearchClick={() => setSearchOpen(true)} />
      <main className="flex-1"><Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:category" element={<ShopPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes></main>
      <Footer />
    </div>
    <ShoppingCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    <WishlistPanel isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
  </CartProvider></WishlistProvider></ThemeProvider>
}
