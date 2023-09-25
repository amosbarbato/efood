export const getDescription = (desc: string) => {
  if (desc.length > 210) {
    return desc.slice(0, 207) + '...'
  }
}
