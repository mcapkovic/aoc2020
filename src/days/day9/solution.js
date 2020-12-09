/**
 * == PART1 ==
 * - find invalid number -
 * some
 * nested loops
 * 
 * == PART2 ==
 * - sum of contiguous numbers -
 * nested loops
 */

let PREAMBLE = 25;

export function partOneCode(input) {
  // PREAMBLE = 5;
  let result = 0;

  for (let index = 0; index < input.length - PREAMBLE; index++) {
    const position = PREAMBLE + index;
    const previous = input.slice(position - PREAMBLE, position);
    const currentNumber = input[position];

    const isCorrect = previous.some((firstNum, indexFirst) => {
      return previous.some((secondNum, indexSecond) => {
        if (indexFirst === indexSecond) return false;
        if (firstNum + secondNum === currentNumber) return true;
        return false;
      });
    });

    if (!isCorrect) {
      result = currentNumber;
      break;
    }
  }

  return result;
}

export function partTwoCode(input) {
  // PREAMBLE = 5;
  const invalidNumber = partOneCode(input);
  let numbersSet = [];

  input.some((firstNum, firstIndex) => {
    if (firstNum === invalidNumber) return false;

    let sum = firstNum;
    numbersSet = [firstNum];
    for (let index = 1; index < input.length - firstIndex; index++) {
      sum = sum + input[index + firstIndex];
      numbersSet.push(input[index + firstIndex]);
      if (sum === invalidNumber) return true;
    }

    return false;
  });

  const max = Math.max(...numbersSet);
  const min = Math.min(...numbersSet);

  return max + min;
}

const e1p1 = `
35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;

  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((string) => Number(string));

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
