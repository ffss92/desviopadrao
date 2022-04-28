import { StdDeviationType } from "../../components/stdDeviation/StdDeviation";

export function calculateMean(nums: number[]) {
  return (
    nums.reduce((prev, current) => {
      return prev + current;
    }) / nums.length
  );
}

export default function stdDeviation(nums: number[], type: StdDeviationType) {
  const mean = calculateMean(nums);
  const numberElements = nums.length;
  const sumNums = nums.reduce((prev, curr) => prev + curr);
  let v = 0;
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    v += Math.pow(el - mean, 2);
  }
  const variance =
    type === "population" ? v / numberElements : v / (numberElements - 1);
  return {
    mean,
    numberElements,
    stdDev: Math.sqrt(variance),
    variance,
    sumNums,
  };
}
