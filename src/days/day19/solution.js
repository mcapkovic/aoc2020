function getOptions(rules, key) {
  console.log(rules[key].vertices);
  rules[key].vertices.map((option) => {
    
    // console.log(option);
  });

  // if()
  rules[key].options = ["s"];
}

export function partOneCode(input) {
  // console.log(input[0]);
  const rules = input[0];

  Object.keys(rules).forEach((key) => {
    // console.log(rules[key]);
    if (rules[key].options.length === 0) {
      getOptions(rules, key);
    }
  });

  console.log(rules);

  return "Part1 answer.";
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

const e1p1 = `0: 4 1 5
1: 2 3 | 3 2
2: 4 4 | 5 5
3: 4 5 | 5 4
4: "a"
5: "b"

ababbb
bababa
abbbab
aaabbb
aaaabbb
`;

const e1p2 = `0: 1 2
1: "a"
2: 1 3 | 3 1
3: "b"
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  currentInput = e1p1;
  currentInput = e1p2;

  let parsedInput = [];
  let buffer = [];
  currentInput
    .replace(/"/gi, "")
    .split("\n")
    .forEach((row) => {
      if (row === "") {
        parsedInput.push(buffer);
        buffer = [];
      } else {
        buffer.push(row);
      }
    });

  const rules = {};
  parsedInput[0].forEach((row) => {
    const rule = row.split(": ");
    const vertices = rule[1].split(" | ").map((option) => option.split(" "));
    rules[rule[0]] = { vertices, options: [] };
  });
  parsedInput[0] = rules;

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
