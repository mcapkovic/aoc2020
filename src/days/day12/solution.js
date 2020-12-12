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
    boat = actions[instruction.action](boat, instruction.value);
  });

  return Math.abs(boat.position[0]) + Math.abs(boat.position[1]);
}

const actions2 = {
  N: (boat, value) => {
    const newPosition = [boat.position[0], boat.position[1] - value];
    return { ...boat, position: newPosition };
  },
  S: (boat, value) => {
    const newPosition = [boat.position[0], boat.position[1] + value];
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
  L: (waypoint, value) => {
    const turn = value / 90;
    const position = [waypoint.position[0], waypoint.position[1]];
    let newPosition = [];
    if (turn === 2) {
      newPosition = [position[0] * -1, position[1] * -1];
    } else if (turn === 1) {
      newPosition = [position[1], position[0] * -1];
    } else if (turn === 3) {
      newPosition = [position[1] * -1, position[0]];
    }
    return { position: newPosition };
  },
  R: (waypoint, value) => {
    const turn = value / 90;
    const position = [waypoint.position[0], waypoint.position[1]];
    let newPosition = [];
    if (turn === 2) {
      newPosition = [position[0] * -1, position[1] * -1];
    } else if (turn === 1) {
      newPosition = [position[1] * -1, position[0]];
    } else if (turn === 3) {
      newPosition = [position[1], position[0] * -1];
    }
    return { position: newPosition };
  },
};

export function partTwoCode(input) {
  let boat = {
    position: [0, 0],
    facing: "E",
  };
  let waypoint = { position: [10, -1] };

  input.forEach((instruction) => {
    if (instruction.action === "F") {
      boat.position = [
        boat.position[0] + waypoint.position[0] * instruction.value,
        boat.position[1] + waypoint.position[1] * instruction.value,
      ];
    } else {
      waypoint = actions2[instruction.action](waypoint, instruction.value);
    }
  });

  return Math.abs(boat.position[0]) + Math.abs(boat.position[1]);
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
