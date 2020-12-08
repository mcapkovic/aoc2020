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

function runProgram(input) {
  const usedInstructions = new Set();
  let prevPosition = 0;
  let position = 0;
  let value = 0;

  do {
    if (usedInstructions.has(position)) return { value, correct: false };
    if (position === input.length && prevPosition === position - 1)
      return { value, correct: true };
    if (position > input.length - 1) return { value, correct: false };

    usedInstructions.add(position);

    const instruction = input[position];
    const { newValue, positionIncrement } = operations[instruction.operation](
      instruction.argument,
      position,
      value
    );

    value = newValue;
    prevPosition = position;
    position = positionIncrement;
  } while (true);
}
export function partTwoCode(input) {
  const nopIndex = [];
  const jumpIndex = [];

  input.forEach((row, index) => {
    if (row.operation === "nop") nopIndex.push(index);
    if (row.operation === "jmp") jumpIndex.push(index);
  });

  do {
    const newInput = [...input];
    if (nopIndex.length > 0) {
      const index = nopIndex.pop();
      newInput.splice(index, 1, { ...newInput[index], operation: "jmp" });
    } else if (jumpIndex.length > 0) {
      const index = jumpIndex.pop();
      newInput.splice(index, 1, { ...newInput[index], operation: "nop" });
    }
    const { value, correct } = runProgram(newInput);
    if (correct) return value;
  } while (true);
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

const e1p2 = `
nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
nop -4
acc +6
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;
  // currentInput = e1p2;

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
