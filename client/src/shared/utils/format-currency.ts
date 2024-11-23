export const formatCurrency = (price: number): string =>
  Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
