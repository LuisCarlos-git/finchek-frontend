export function currencyStringToNumber(value: string) {
  return +value.replace(/\./g, '').replace(',', '.');
}
