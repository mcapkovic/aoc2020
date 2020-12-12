//  N
//  S
//  E
//  W
//  L
//  R
//  F

const directions = ["N", "E", "S", "W"];

const actions = {
  N: (boat, value) => {
    const newPosition = [boat.position[0], boat.position[1] + value];
    return { ...boat, position: newPosition };
  },
  S: (boat, value) => {
    const newPosition = [boat.position[0], boat.position[1] - value];
    return { ...boat, position: newPosition };
  },
  E: (boat, value) => {
    const newPosition = [boat.position[0] + value, boat.position[1]];
    return { ...boat, position: newPosition };
  },
  W: (boat, value) => {
    const newPosition = [boat.position[0] - value, boat.position[1]];
    return { ...boat, position: newPosition };
  },
  L: (boat, value) => {
    const { position, facing } = boat;
    const turn = value / 90;
    const directionIndex = directions.indexOf(facing);
    const newDirection =
      directionIndex - turn < 0
        ? directions[directions.length + (directionIndex - turn)]
        : directions[directionIndex - turn];
    return { ...boat, facing: newDirection };
  },
  R: (boat, value) => {
    const { position, facing } = boat;
    const turn = value / 90;
    const directionIndex = directions.indexOf(facing);
    const newDirection =
      directionIndex + turn > 3
        ? directions[(directionIndex + turn) % directions.length]
        : directions[directionIndex + turn];
    return { ...boat, facing: newDirection };
  },
  F: (boat, value) => actions[boat.facing](boat, value),
};

export function partOneCode(input) {
  let boat = {
    position: [0, 0],
    facing: "E",
  };

  input.forEach((instruction) => {
    boat = actions[instruction.action](boat, instruction.value)
  });

  return Math.abs(boat.position[0]) + Math.abs(boat.position[1]);
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `
F10
N3
F7
R90
F11
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;
  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((row) => {
      return {
        value: Number(row.slice(1)),
        action: row[0],
      };
    });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
