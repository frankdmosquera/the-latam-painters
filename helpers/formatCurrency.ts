export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

// formatCurrency(1234.5); // "$1,234.50"
// formatCurrency(1234.5, "EUR", "de-DE"); // "1.234,50 €"
