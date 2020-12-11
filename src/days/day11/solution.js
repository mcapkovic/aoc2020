const neighborhood = {
  0: (input, row, col) => {
    const seat = input[row - 1] && input[row - 1][col - 1];
    if (seat) return seat;
    return "no-seat";
  },
  1: (input, row, col) => {
    const seat = input[row - 1] && input[row - 1][col];
    if (seat) return seat;
    return "no-seat";
  },
  2: (input, row, col) => {
    const seat = input[row - 1] && input[row - 1][col + 1];
    if (seat) return seat;
    return "no-seat";
  },
  3: (input, row, col) => {
    const seat = input[row][col - 1];
    if (seat) return seat;
    return "no-seat";
  },
  4: (input, row, col) => {
    const seat = input[row][col + 1];
    if (seat) return seat;
    return "no-seat";
  },
  5: (input, row, col) => {
    const seat = input[row + 1] && input[row + 1][col - 1];
    if (seat) return seat;
    return "no-seat";
  },

  6: (input, row, col) => {
    const seat = input[row + 1] && input[row + 1][col];
    if (seat) return seat;
    return "no-seat";
  },
  7: (input, row, col) => {
    const seat = input[row + 1] && input[row + 1][col + 1];
    if (seat) return seat;
    return "no-seat";
  },
};

function newSeatState(input, row, col, currentState) {
  if (currentState === ".") return currentState;

  // console.log("neighborhood", neighborhood[0](input, row, col));

  const neighborhoodSeats = [];
  for (let index = 0; index < 8; index++) {
    neighborhoodSeats.push(neighborhood[index](input, row, col));
  }

  const occupiedCount = neighborhoodSeats.filter((seat) => seat === "#");

  // console.log(occupiedCount);
  if (currentState === "L") return occupiedCount.length === 0 ? "#" : "L";
  if (currentState === "#") return occupiedCount.length >= 4 ? "L" : "#";
}

function runRound(input, loop) {
  if (loop === 0) return input;
  const newSeating = input.map((row, rowIndex) => {
    let test = "";
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const element = row[colIndex];
      // console.log(element)
      const newSeat = newSeatState(input, rowIndex, colIndex, element);
      test = test + newSeat;
    }
    return test;
  });
  // console.log('loop', loop);
  // console.log(newSeating);
  return runRound(newSeating, loop - 1);
}

export function partOneCode(input) {
  const seating = runRound(input, 100);
  console.log(seating);
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
L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;
  let parsedInput = currentInput.trim().split("\n");

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
