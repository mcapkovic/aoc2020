export function partOneCode(input) {
  const rules = Object.values(input[0]);
  const allRules = [].concat.apply([], rules);
  const error = input[2]
    .map((ticket) => {
      let err = 0;
      ticket.forEach((value) => {
        const errors = allRules.filter(
          (rule) => value < rule[0] || value > rule[1]
        );
        if (errors.length === allRules.length) err = value;
      });
      return err;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return error;
}

export function partTwoCode(input) {
  const rules = Object.values(input[0]);
  const allRules = [].concat.apply([], rules);
  const validTickets = [];

  input[2].forEach((ticket) => {
    const validTicketNumbers = ticket
      .map((value) => {
        const errors = allRules.filter(
          (rule) => value < rule[0] || value > rule[1]
        );
        if (errors.length === allRules.length) return false;
        return true;
      })
      .filter((value) => value);
    if (validTicketNumbers.length === ticket.length) validTickets.push(ticket);
  });

  return validTickets;
}

const e1p1 = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  currentInput = e1p1;

  let parsedInput = [];
  let temp = [];
  currentInput.split("\n").forEach((row) => {
    if (row === "") {
      parsedInput.push(temp);
      temp = [];
      return;
    }
    if (row.includes("nearby")) return;
    temp.push(row);
  });

  let rules = {};
  console.log(parsedInput);
  parsedInput[0].forEach((ruleString) => {
    const rule = ruleString.split(":");
    rules[rule[0]] = rule[1]
      .split("or")
      .map((part) => part.split("-").map((str) => Number(str)));
  });
  parsedInput[0] = rules;

  parsedInput[1] = parsedInput[1][1].split(",").map((str) => Number(str));

  parsedInput[2] = parsedInput[2].map((row) =>
    row.split(",").map((str) => Number(str))
  );

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
