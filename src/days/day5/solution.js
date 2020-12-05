function getPosition(instructions) {
  let range = instructions.length > 3 ? [0, 127] : [0, 7];

  for (let instruction of instructions) {
    const lowerMiddle = Math.floor((range[1] - range[0]) / 2) + range[0];
    const upperMiddle    = Math.ceil((range[1] - range[0]) / 2) + range[0];

    range =
      instruction === "B" || instruction === "R"
        ? [upperMiddle, range[1]]
        : [range[0], lowerMiddle];
  }
  
  return range[0];
}

export function partOneCode(input) {
  let maxID = 0;
  let minID = Number.MAX_SAFE_INTEGER;
  input.forEach((code) => {
    const row = getPosition(code.slice(0, 7));
    const col = getPosition(code.slice(7, 10));

    const id = row * 8 + col;
    if (id > maxID) maxID = id;
    if (id < minID) minID = id;
  });

  return { minID, maxID };
}

export function partTwoCode(input) {
  let { minID, maxID } = partOneCode(input);
  const seats = new Set(Array.from(Array(maxID - minID), (_, i) => i + minID));

  input.forEach((code) => {
    const row = getPosition(code.slice(0, 7));
    const col = getPosition(code.slice(7, 10));
    const id = row * 8 + col;
    seats.delete(id);
  });

  return [...seats];
}

const e1p1 = `
FBFBBFFRLR
`;

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = currentInput.trim().split("\n");

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
