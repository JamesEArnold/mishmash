export const findNumberOfHarvestsPerYear = (numberOfDaysBetweenHarvest: number): number => 365 / numberOfDaysBetweenHarvest;

export const findRateOfReturnPerHarvest = (
  numberOfHarvestsPerYear: number,
  annualPercentageRate: number,
): number => {
  return (annualPercentageRate / numberOfHarvestsPerYear) / 100 + 1;
};

export const findYearlyInvestmentReturn = (
  rateOfReturnPerHarvest: number,
  initialInvestment: number,
  numberOfHarvestsPerYear: number,
  feePerHarvest: number,
): number => {
  let compoundedInvestment = initialInvestment;
  for (let i = 0; i < numberOfHarvestsPerYear; i++) {
    compoundedInvestment = (rateOfReturnPerHarvest * compoundedInvestment) - feePerHarvest;
  }
  return Math.round(compoundedInvestment * 100) / 100;
};

export const findPotentialReturnsForVaryingNumberOfHarvests = (
  annualPercentageRate: number,
  initialInvestment: number,
  feePerHarvest: number,
): number[] => {
  const yearInDays = 365;
  const returnsFor365Harvests = [];
  for (let i = 1; i <= yearInDays; i++) {
    returnsFor365Harvests.push(
      findYearlyInvestmentReturn(
        findRateOfReturnPerHarvest(i, annualPercentageRate), initialInvestment, i, feePerHarvest,
      )
    )
  }
  return returnsFor365Harvests;
};

export const findOptimalNumberOfHarvestsPerYear = (
  annualPercentageRage: number,
  initialInvestment: number,
  feePerHarvest: number,
): number => {
  const potentialReturns = findPotentialReturnsForVaryingNumberOfHarvests(
    annualPercentageRage, initialInvestment, feePerHarvest,
  );
  const maximumReturn = Math.max(...potentialReturns);
  return potentialReturns.indexOf(maximumReturn) + 1;
};
