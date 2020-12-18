const directions = [
  [-1, -1, -1], // top left
  [-1, 0, -1], // top
  [-1, 1, -1], // top right
  [0, -1, -1], // left
  [0, 1, -1], // right
  [1, -1, -1], // bottom left
  [1, 0, -1], //bottom
  [1, 1, -1], // bottom right

  [-1, -1, 0], // top left
  [-1, 0, 0], // top
  [-1, 1, 0], // top right
  [0, -1, 0], // left
  [0, 1, 0], // right
  [1, -1, 0], // bottom left
  [1, 0, 0], //bottom
  [1, 1, 0], // bottom right

  [-1, -1, 1], // top left
  [-1, 0, 1], // top
  [-1, 1, 1], // top right
  [0, -1, 1], // left
  [0, 1, 1], // right
  [1, -1, 1], // bottom left
  [1, 0, 1], //bottom
  [1, 1, 1], // bottom right

  [0, 0, 1], // center top
  [0, 0, -1], // center bottom
];

function getNeighborSeat(input, row, col, layer) {
  const seat = input[layer] && input[layer][row] && input[layer][row][col];
  if (seat) return seat;
  return ".";
}

function newSeatState(input, row, col, layer, currentState) {
  // if (currentState === ".") return currentState;

  const occupiedCount = directions
    .map((direction) =>
      getNeighborSeat(
        input,
        row + direction[0],
        col + direction[1],
        layer + direction[2]
      )
    )
    .filter((seat) => seat === "#");

  if (currentState === ".") return occupiedCount.length === 3 ? "#" : ".";
  if (currentState === "#")
    return occupiedCount.length === 2 || occupiedCount.length === 3 ? "#" : ".";
}

function runRound(input, loop) {
  if (loop === 0) return input;

  const newSeating = input.map((layer, layerIndex) =>
    layer.map((row, rowIndex) =>
      [...row]
        .map((seat, colIndex) =>
          newSeatState(input, rowIndex, colIndex, layerIndex, seat)
        )
        .join("")
    )
  );

  // console.log(newSeating)
  console.log("======================= loop: " + loop);
  newSeating.forEach((element) => {
    console.log(element.join("\n"));
    console.log("---------");
  });
  console.log("=======================");

  return runRound(newSeating, loop - 1);
}

export function partOneCode(input) {
  const seating = runRound(input, 2);

  // console.log(seating)
  const countOccupied = seating
    .map((row) => {
      return [...row].filter((seat) => seat === "#").length;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return countOccupied;
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `
.#.
..#
###
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  currentInput = e1p1;
  const firstLayer = currentInput.trim().split("\n");
  const otherLayer = firstLayer.map((row) => [...row].map(() => ".").join(""));
  let parsedInput = [otherLayer, firstLayer, otherLayer];

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
