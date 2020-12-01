export function partOneCode(input) {
  let numbers = [];
  // input.forEach((mainNumber) => {
  //   input.forEach((subNumber) => {
  //     if (mainNumber + subNumber === 2020) {
  //       numbers = [mainNumber, subNumber];
  //     }
  //   });
  // });

  input.some((mainNumber) => {
    input.some((subNumber) => {
      if (mainNumber + subNumber === 2020) {
        numbers = [mainNumber, subNumber];
        return true;
      }
    });
  });

  const result = numbers[0] * numbers[1];

  return result;
}

export function partTwoCode(input) {
  let numbers = [];
  input.some((mainNumber) => {
    input.some((subNumber) => {
      input.some((subSubNumber) => {
        if (mainNumber + subNumber + subSubNumber === 2020) {
          numbers = [mainNumber, subNumber, subSubNumber];
          return true;
        }
      });
    });
  });

  const result = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

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
