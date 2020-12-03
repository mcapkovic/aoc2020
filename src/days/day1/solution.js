/**
 * == PART1 ==
 * nested loops
 * some
 * Set
 * 
 * == PART2 ==
 * nested loops
 * 
 */

export function partOneCode(input) {
  const inputSet = new Set(input);
  let result = 0;

  input.some((firstNumber) => {
    const secondNumber = 2020 - firstNumber;
    if (!inputSet.has(secondNumber)) return false;
    result = firstNumber * secondNumber;
    return true;
  });

  return result;
}

export function partTwoCode(input) {
  let result = 0;
  input.some((mainNumber) => {
    input.some((subNumber) => {
      input.some((subSubNumber) => {
        if (mainNumber + subNumber + subSubNumber === 2020) {
          result = mainNumber * subNumber * subSubNumber;
          return true;
        }
      });
    });
  });

  return result;
}

const p1e1 = `
1721
979
366
299
675
1456
`;

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((string) => Number(string));
  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
