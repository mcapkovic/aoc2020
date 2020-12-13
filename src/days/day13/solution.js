export function partOneCode(input) {
  let currentTime = input[0];
  let isFinished = false;
  let busId = 0;
  do {
    currentTime++;
    isFinished = input[1].some((id) => {
      if (currentTime % id === 0) {
        busId = id;
        return true;
      }
    });
    // console.log(currentTime)
  } while (!isFinished);

  return (currentTime - input[0]) * busId;
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `
939
7,13,x,x,59,x,31,19
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;

  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((row, i) => {
      if (i === 0) {
        return Number(row);
      }
      return row
        .split(",")
        .filter((value) => value !== "x")
        .map((value) => Number(value));
    });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
