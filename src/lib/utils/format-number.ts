export default function formatNumber(
  num: number,
  locale?: Intl.Locale,
  options?: Intl.NumberFormatOptions,
) {
  return new Intl.NumberFormat(locale ?? 'id-ID', options).format(num)
}
