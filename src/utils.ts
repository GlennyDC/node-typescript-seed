export const sleep = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};

export const sum = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export const difference = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc - curr, 0);
};
