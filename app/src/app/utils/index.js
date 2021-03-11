export const formatPrice = (currency_id, price) =>{
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: currency_id, minimumFractionDigits: 0 }).format(price)
}