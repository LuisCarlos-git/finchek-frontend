export const formatCurrencyToBRL = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  }).format(value);
};
