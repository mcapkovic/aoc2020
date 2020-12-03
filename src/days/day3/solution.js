/**
 * == PART1 ==
 * loop
 * infinite x direction
 * 
 * == PART2 ==
 * loops with variable x,y steps
 */

export function partOneCode(input) {
  let treeCount = 0;
  let currentXPos = 0;

  input.forEach((row) => {
    if (row[currentXPos] === "#") treeCount++;
    currentXPos = currentXPos + 3;
    if (currentXPos >= row.length) currentXPos = currentXPos % row.length;
  });

  return treeCount;
}

function countTrees([xStep, yStep], input) {
  let treeCount = 0;
  let currentXPos = 0;
  let currentYPos = 0;

  while (currentYPos < input.length) {
    const row = input[currentYPos];
    if (row[currentXPos] === "#") treeCount++;

    currentYPos = currentYPos + yStep;
    currentXPos = currentXPos + xStep;
    if (currentXPos >= row.length) currentXPos = currentXPos % row.length;
  }

  return treeCount;
}

export function partTwoCode(input) {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  return slopes
    .map((slope) => countTrees(slope, input))
    .reduce((accumulator, currentValue) => accumulator * currentValue);
}

const e1p1 = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
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
