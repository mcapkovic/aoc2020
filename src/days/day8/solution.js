const operations = {
  acc: (argument, position, value) => {
    return { newValue: argument + value, positionIncrement: position + 1 };
  },
  jmp: (argument, position, value) => {
    return { newValue: value, positionIncrement: argument + position };
  },
  nop: (argument, position, value) => {
    return { newValue: value, positionIncrement: position + 1 };
  },
};

export function partOneCode(input) {
  const usedInstructions = new Set();
  let position = 0;
  let value = 0;

  do {
    if (usedInstructions.has(position)) return value;
    usedInstructions.add(position);

    const instruction = input[position];
    const { newValue, positionIncrement } = operations[instruction.operation](
      instruction.argument,
      position,
      value
    );

    value = newValue;
    position = positionIncrement;
  } while (true);
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `
nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;
  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((row) => {
      const instruction = row.split(" ");
      return { operation: instruction[0], argument: Number(instruction[1]) };
    });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
