// Preview catalogue for the design phase. Replace these entries with verified
// inventory before enabling WhatsApp ordering for a product.
export const products = [
  { id: 'preview-earrings-01', name: 'Earring design preview', category: 'earrings', price: null, description: 'Temporary design preview — replace with a verified product description.', image: null, variants: [], available: false, previewOnly: true },
  { id: 'preview-necklace-01', name: 'Necklace design preview', category: 'necklaces', price: null, description: 'Temporary design preview — replace with a verified product description.', image: null, variants: [], available: false, previewOnly: true },
  { id: 'preview-rings-01', name: 'Ring design preview', category: 'rings', price: null, description: 'Temporary design preview — replace with a verified product description.', image: null, variants: [], available: false, previewOnly: true },
  { id: 'preview-bracelet-01', name: 'Bracelet design preview', category: 'bracelets', price: null, description: 'Temporary design preview — replace with a verified product description.', image: null, variants: [], available: false, previewOnly: true },
]

export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'rings', label: 'Rings' },
  { id: 'bracelets', label: 'Bracelets' },
]

export const getProductById = id => products.find(product => product.id === id)
