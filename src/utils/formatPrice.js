export default function formatPrice(value, locale = 'pt-BR') {
  if (isNaN(value)) return;
  value = Number(value).toFixed(2);
  value = String(value).split('.');
  if (locale == 'en-US') return `${Number(value[0]).toLocaleString(locale)}.${value[1]}`;
  return `${Number(value[0]).toLocaleString(locale)},${value[1]}`;
}