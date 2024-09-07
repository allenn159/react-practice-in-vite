export function calculateProfitInDollars(
  purchasePrice: string,
  fees: string | null,
  soldPrice: string | null
): string {
  if (!soldPrice) return "0.00";

  const totalInitialCost =
    parseFloat(purchasePrice) + (fees ? parseFloat(fees) : 0);
  const profitInDollars = parseFloat(soldPrice) - totalInitialCost;

  return profitInDollars.toFixed(2);
}

export function calculateProfitPercentage(
  purchasePrice: string,
  fees: string,
  soldPrice: string | null
): number {
  if (!soldPrice) return 0;

  const totalInitialCost =
    parseFloat(purchasePrice) + (fees ? parseFloat(fees) : 0);
  const profitInDollars = parseFloat(soldPrice) - totalInitialCost;

  const profitPercentage = Math.round(
    (profitInDollars / totalInitialCost) * 100
  );

  return profitPercentage;
}
