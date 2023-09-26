export const getDescription = (description: string) => {
  if (description.length > 173) {
    return description.slice(0, 173) + '...'
  }
  return description
}

export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((acc, currentValue) => {
    if (currentValue.preco) {
      return (acc += currentValue.preco)
    }
    return 0
  }, 0)
}
