function createBinaryString(value) {
  const stringValue = value.toString(2);
  let zeroes = Array.from({ length: 36 - stringValue.length }, () => 0).join(
    ""
  );
  return zeroes + stringValue;
}

export function partOneCode(input) {
  let currentMask = input[0];
  const memory = {};

  input.forEach((row) => {
    if ("mask" in row) return (currentMask = row.mask);

    const binaryValue = createBinaryString(row.value);
    let value = "";

    for (let index = 0; index < currentMask.length; index++) {
      if (currentMask[index] === "X") {
        value = value + binaryValue[index];
      } else {
        value = value + currentMask[index];
      }
    }
    memory[row.mem] = value;
  });

  return Object.values(memory)
    .map((string) => parseInt(string, 2))
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `
mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;
  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((row) => {
      if (row.includes("mask")) return { mask: row.replace("mask = ", "") };
      const [_, mem, value] = row.match(/mem\[(\d*)\] = (\d*)/);
      return { mem: Number(mem), value: Number(value) };
    });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
