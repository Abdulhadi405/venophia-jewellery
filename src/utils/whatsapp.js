export const WHATSAPP_NUMBER = '923080044471'

export function buildWhatsAppMessage(items) {
  const validItems = items.filter(item => item && item.available && !item.previewOnly && item.name)
  if (!validItems.length) return ''

  const lines = validItems.map(item => {
    const variant = item.selectedVariant ? ` — ${item.selectedVariant}` : ''
    return `• ${item.name} (${item.id})${variant} × ${item.quantity}`
  })
  return [
    'Hello Venophia, I would like to enquire about:',
    ...lines,
    '',
    'I understand this is an enquiry/order request. Please confirm availability, final details and payment instructions.',
  ].join('\n')
}

export function buildWhatsAppUrl(items) {
  const message = buildWhatsAppMessage(items)
  return message ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : ''
}
