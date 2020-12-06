export function partOneCode(input) {
  let count = 0;

  input.forEach((group) => {
    const questions = new Set();

    group.forEach((person) => {
      for (let answer of person) questions.add(answer);
    });

    count += questions.size;
  });

  return count;
}

export function partTwoCode(input) {
  let count = 0;

  input.forEach((group) => {
    const questions = {};

    group.forEach((person) => {
      for (let answer of person) {
        if (questions[answer]) {
          questions[answer]++;
        } else {
          questions[answer] = 1;
        }
      }
    });

    Object.values(questions).forEach((questionCount) => {
      if (group.length === questionCount) count++;
    });
  });

  return count;
}

const e1p1 = `abc

a
b
c

ab
ac

a
a
a
a

b
`;

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = [];

  let group = [];
  currentInput.split("\n").forEach((row) => {
    if (row === "") {
      parsedInput.push(group);
      group = [];
    } else {
      group.push(row);
    }
  });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
