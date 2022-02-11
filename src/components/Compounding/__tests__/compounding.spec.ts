import {
  findNumberOfHarvestsPerYear,
  findOptimalNumberOfHarvestsPerYear,
  findPotentialReturnsForVaryingNumberOfHarvests,
  findRateOfReturnPerHarvest,
  findYearlyInvestmentReturn,
} from '@/components/Compounding/compounding';

describe('compounding', () => {
  describe(findNumberOfHarvestsPerYear, () => {
    it('finds the number of harvests per year based off the number of days between harvest', () => {
      const someNumberOfDaysBetweenHarvest = 5;
      const someNumberOfHarvestsPerYear = 73;
      expect(findNumberOfHarvestsPerYear(someNumberOfDaysBetweenHarvest)).toEqual(someNumberOfHarvestsPerYear);
    });
  });

  describe(findRateOfReturnPerHarvest, () => {
    it('finds the percentage rate of return per harvest', () => {
      const someNumberOfHarvestsPerYear = findNumberOfHarvestsPerYear(73);
      const someAnnualPercentageRate = 50;
      const someRateOfReturnPerHarvest = 1.1;
      expect(findRateOfReturnPerHarvest(someNumberOfHarvestsPerYear, someAnnualPercentageRate)).toEqual(someRateOfReturnPerHarvest);
    });
  });

  const someInitialInvestment = 10;
  const someFeePerHarvest = 0.1;
  const someRateOfReturnPerHarvest = 1.1;
  describe(findYearlyInvestmentReturn, () => {
    it('finds the total investment return for a year', () => {
      const someNumberOfHarvestsPerYear = 3;
      const someYearlyInvestmentReturn = 12.98;
      expect(findYearlyInvestmentReturn(someRateOfReturnPerHarvest, someInitialInvestment, someNumberOfHarvestsPerYear, someFeePerHarvest)).toEqual(someYearlyInvestmentReturn);
    });
  });

  const someAnnualPercentageRate = 50;
  describe(findPotentialReturnsForVaryingNumberOfHarvests, () => {
    it('returns an array containing 365 harvest results', () => {
      const result = findPotentialReturnsForVaryingNumberOfHarvests(someAnnualPercentageRate, someInitialInvestment, someFeePerHarvest);
      expect(result).toHaveLength(365);
    });
  });

  describe(findOptimalNumberOfHarvestsPerYear, () => {
    it('returns the index of the optimal number of harvests per year', () => {
      const someOptimalNumberOfHarvests = 4;
      expect(findOptimalNumberOfHarvestsPerYear(someAnnualPercentageRate, someInitialInvestment, someFeePerHarvest)).toEqual(someOptimalNumberOfHarvests);
    });
  });
});