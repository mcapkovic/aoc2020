export function partOneCode(input) {
  const adapters = new Set(input);
  let lastAdapter = 0;
  let difference = 0;
  const differences = { 3: 1 };
  do {
    difference++;
    const nextAdapter = lastAdapter + difference;

    if (adapters.has(nextAdapter)) {
      if (difference in differences) {
        differences[difference]++;
      } else {
        differences[difference] = 1;
      }
      lastAdapter = nextAdapter;
      difference = 0;
    }
  } while (difference <= 3);
  return differences["1"] * differences["3"];
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `
16
10
15
5
1
11
7
19
6
12
4
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;

  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((str) => Number(str));

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
