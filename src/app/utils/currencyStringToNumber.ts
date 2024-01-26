export function currencyStringToNumber(value: string | number) {
  if (typeof value === 'number') return value;

  return +value.replace(/\./g, '').replace(',', '.');
}
