// Preview catalogue for the design phase. Replace these entries with verified
// inventory before enabling WhatsApp ordering for a product.
export const products = [
  { id: 'preview-earrings-01', name: 'Earring design preview', category: 'earrings', price: null, description: 'Temporary design preview — replace with a verified product description.', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85', variants: [], available: false, previewOnly: true },
  { id: 'preview-necklace-01', name: 'Necklace design preview', category: 'necklaces', price: null, description: 'Temporary design preview — replace with a verified product description.', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85', variants: [], available: false, previewOnly: true },
  { id: 'preview-rings-01', name: 'Ring design preview', category: 'rings', price: null, description: 'Temporary design preview — replace with a verified product description.', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85', variants: [], available: false, previewOnly: true },
  { id: 'preview-bracelet-01', name: 'Bracelet design preview', category: 'bracelets', price: null, description: 'Temporary design preview — replace with a verified product description.', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85', variants: [], available: false, previewOnly: true },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', image: products[0].image },
  { id: 'necklaces', label: 'Necklaces', image: products[1].image },
  { id: 'rings', label: 'Rings', image: products[2].image },
  { id: 'bracelets', label: 'Bracelets', image: products[3].image },
]

export const getProductById = id => products.find(product => product.id === id)
