export function capitalizeFirstLetter(text: string) {
  const firstLatter = text.charAt(0).toLocaleUpperCase();

  return `${firstLatter}${text.slice(1)}`;
}
