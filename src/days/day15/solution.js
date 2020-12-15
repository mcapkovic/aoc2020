export function partOneCode(input) {
  const usedNumbers = {};

  function addNumber(num, round) {
    if (num in usedNumbers) {
      const previousPositions = usedNumbers[num];
      usedNumbers[num] = [
        previousPositions[previousPositions.length - 1],
        round,
      ];
    } else {
      usedNumbers[num] = [round];
    }
  }

  input.forEach((currentInput, index) => {
    addNumber(currentInput, index + 1);
  });

  let count = input.length;
  let lastNumber = input[input.length - 1];

  do {
    count++;
    let newNumber = 0;
    const previousPositions = usedNumbers[lastNumber];
    if (previousPositions && previousPositions.length > 1) {
      newNumber = previousPositions[1] - previousPositions[0];
    }
    lastNumber = newNumber;
    addNumber(newNumber, count);
  } while (count < 2020);

  return lastNumber;
}


// BRUTE FORCE
export function partTwoCode(input) {
  const usedNumbers = {};

  function addNumber(num, round) {
    if (num in usedNumbers) {
      const previousPositions = usedNumbers[num];
      usedNumbers[num] = [
        previousPositions[previousPositions.length - 1],
        round,
      ];
    } else {
      usedNumbers[num] = [round];
    }
  }

  input.forEach((currentInput, index) => {
    addNumber(currentInput, index + 1);
  });

  let count = input.length;
  let lastNumber = input[input.length - 1];

  do {
    count++;
    let newNumber = 0;
    const previousPositions = usedNumbers[lastNumber];
    if (previousPositions && previousPositions.length > 1) {
      newNumber = previousPositions[1] - previousPositions[0];
    }
    lastNumber = newNumber;
    addNumber(newNumber, count);
  } while (count < 30000000);

  return lastNumber;
}

const e1p1 = `
0,3,6
`;

const e2p1 = `
1,3,2
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;

  // currentInput = e1p1;
  // currentInput = e2p1;

  let parsedInput = currentInput
    .trim()
    .split(",")
    .map((str) => Number(str));

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
