function getValue(equation) {
  let level = 0;
  const values = {};
  const operators = {};

  for (const char of equation) {
    if (char === "*") operators[level] = "*";
    if (char === "+") operators[level] = "+";

    if (char === "(") level++;

    if (char === ")") {
      if (operators[level - 1] === "*") {
        values[level - 1] = values[level - 1] * values[level];
      } else if (operators[level - 1] === "+") {
        values[level - 1] = values[level - 1] + values[level];
      } else {
        values[level - 1] = values[level];
      }
      operators[level-1] = undefined
      values[level] = 0;
      level--;
    }

    if (Number(char)) {
      if (values[level] && operators[level]) {
        if (operators[level] === "*"){
          values[level] = values[level] * Number(char)
          operators[level] = undefined
        };
        if (operators[level] === "+"){
          values[level] = values[level] + Number(char);
          operators[level] = undefined
        }
      } else {
        values[level] = Number(char);
      }
    }

  }
  return values["0"];
}

export function partOneCode(input) {
  return input.map((equation) => getValue(equation)).reduce((accumulator, currentValue) => accumulator + currentValue);
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `
2 * 3 + (4 * 5)
`;

const e2p1 = `
1 + 2 * 3 + 4 * 5 + 6
1 + (2 * 3) + (4 * (5 + 6))
2 * 3 + (4 * 5)
5 + (8 * 3 + 9 + 3 * 4 * 3)
5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))
((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2
2 + ((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2
(((2 + 4) + 1 ) * (3 + 1)) * 2
2 + ((((2 + 4) + 1 ) * (3 + 1)) * 2)
`;

const e3p1 = `
(6 + 9 + 2 * 7)
((6 + 3 + 9) + 5)
(6 + 9 + 2 * 7) + ((6 + 3 + 9) + 5)
`;

const e4p1 = `
3*9+(5*3+2*(4+2*9+2*8)*(7*5*9))+2+9+((4*9+5+6)*(3+5+5*4+7)+3*7+3+(3+3+2))
((4*9+5+6)*(3+5+5*4+7)+3*7+3+(3+3+2))
`

const e5p1 = `
((4*9+5+6)*(3+5+5*4+7)+3*7+3+(3+3+2))
`

const e6p1 = `
3*9+(5*3+2*(4+2*9+2*8)*(7*5*9))+2+9
((4*9+5+6)*(3+5+5*4+7)+3*7+3+(3+3+2))
3*9+(5*3+2*(4+2*9+2*8)*(7*5*9))+2+9+((4*9+5+6)*(3+5+5*4+7)+3*7+3+(3+3+2))
`

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;
  // currentInput = e2p1;
  // currentInput = e3p1;
  // currentInput = e4p1
  // currentInput = e5p1
  // currentInput = e6p1


  const regex = / /gi;
  let parsedInput = currentInput.trim().replace(regex, "").split("\n");
  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
