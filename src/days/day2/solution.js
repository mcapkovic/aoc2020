export function partOneCode(input) {
  const correctPass = [];
  input.forEach((row) => {
    // let count = 0;
    // for (let char of row.password) {
    //   if (char === row.letter) count++;
    // }
    // const condition = `/${row.letter}/g`;

    const condition = new RegExp(row.letter,"g");
    const count = (row.password.match(condition) || []).length;

    if (count < row.leftNum) return;
    if (count > row.rightNum) return;
    correctPass.push(row.password);
  });

  return correctPass.length;
}

export function partTwoCode(input) {
  const correctPass = [];
  input.forEach((row) => {
    let count = 0;
    if (row.password[row.leftNum - 1] === row.letter) count++;
    if (row.password[row.rightNum - 1] === row.letter) count++;
    if (count === 1) correctPass.push(row.password);
  });

  return correctPass.length;
}

const ex1p1 = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((row) => row.split(":"))
    .map((row) => {
      const condition = row[0].split(" ");
      const password = row[1].trim();
      const count = condition[0].split("-");
      return {
        password,
        leftNum: Number(count[0]),
        rightNum: Number(count[1]),
        letter: condition[1],
      };
    });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
