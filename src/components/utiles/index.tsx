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
