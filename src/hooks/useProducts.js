import { useMemo } from 'react'
import { products } from '../data/products'

export function useProducts(params = {}) {
  const filtered = useMemo(() => {
    let result = products
    if (params.category) result = result.filter(product => product.category === params.category)
    if (params.query) {
      const query = params.query.toLowerCase()
      result = result.filter(product =>
        [product.name, product.category, product.description].some(value => value?.toLowerCase().includes(query))
      )
    }
    return result
  }, [params.category, params.query])

  return { products: filtered, loading: false, error: null }
}

export const bustProductCache = () => {}
