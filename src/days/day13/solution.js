export function partOneCode(input) {
  let currentTime = input[0];
  const buses = input[1].filter((value) => value !== "x");
  let isFinished = false;
  let busId = 0;
  do {
    currentTime++;
    isFinished = buses.some((id) => {
      if (currentTime % id === 0) {
        busId = id;
        return true;
      }
    });
  } while (!isFinished);

  return (currentTime - input[0]) * busId;
}

export function partTwoCode(input) {
  // let currentTime = 100000000000000;
  let currentTime = 0;
  const busses= {}
  input[1].forEach((bus,i) => {
    if (bus !== "x") busses[i] = bus
  });
  return busses
  // const noOfBusses = input[1].filter((value) => value !== "x");
  // const buses = input[1];
  // let validBusses = [];

  // do {
  //   currentTime++;
  //   validBusses = [];
  //   buses.forEach((bus, index) => {
  //     if (bus === "x") return;
  //     if ((currentTime + index) % bus === 0) {
  //       validBusses.push(bus);
  //     }
  //   });
  //   console.log(currentTime)
  // } while (validBusses.length !== noOfBusses);

  return currentTime;
}

const e1p1 = `
939
7,13,x,x,59,x,31,19
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  currentInput = e1p1;

  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((row, i) => {
      if (i === 0) {
        return Number(row);
      }
      return (
        row
          .split(",")
          // .filter((value) => value !== "x")
          .map((value) => (value !== "x" ? Number(value) : value))
      );
    });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
