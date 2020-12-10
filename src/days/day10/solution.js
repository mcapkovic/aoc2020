/**
 * == PART1 ==
 * - join adapters -
 * 
 * == PART2 ==
 * - distinct ways you can arrange the adapters -
 * graph
 */

export function partOneCode(input) {
  const adapters = new Set(input);
  let lastAdapter = 0;
  let difference = 0;
  const differences = { 3: 1 };
  do {
    difference++;
    const nextAdapter = lastAdapter + difference;

    if (adapters.has(nextAdapter)) {
      if (difference in differences) {
        differences[difference]++;
      } else {
        differences[difference] = 1;
      }
      lastAdapter = nextAdapter;
      difference = 0;
    }
  } while (difference <= 3);
  return differences["1"] * differences["3"];
}

function addValue(value, field) {
  if (field) {
    return [...field, value];
  } else {
    return [value];
  }
}

function createGraph(input) {
  const adapters = new Set(input);
  let lastAdapter = 0;
  let difference = 0;
  const chart = {};
  do {
    difference++;
    const nextAdapter = lastAdapter + difference;

    if (adapters.has(nextAdapter)) {
      chart[lastAdapter] = addValue(nextAdapter, chart[lastAdapter]);
      if (difference === 1 && adapters.has(nextAdapter + 2))
        chart[lastAdapter] = addValue(nextAdapter + 2, chart[lastAdapter]);
      if (difference === 1 && adapters.has(nextAdapter + 1))
        chart[lastAdapter] = addValue(nextAdapter + 1, chart[lastAdapter]);

      lastAdapter = nextAdapter;
      difference = 0;
    }
  } while (difference <= 3);
  return chart;
}

export function partTwoCode(input) {
  const chart = createGraph(input);
  const values = Object.values(chart);
  const patterns = { 2: 0, 32: 0, 332: 0 };
  let pattern = "";

  do {
    const connections = values.shift();
    if (connections.length > 1) {
      pattern = `${pattern}${connections.length}`;
    } else {
      if (pattern in patterns) patterns[pattern]++;
      pattern = "";
    }
  } while (values.length > 0);

  return (
    Math.pow(2, patterns["2"]) *
    Math.pow(4, patterns["32"]) *
    Math.pow(7, patterns["332"])
  );
}

const e1p1 = `
16
10
15
5
1
11
7
19
6
12
4
`;

const e1p2 = `
28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3
`;

export function inputParse(originalInput) {
  let currentInput = originalInput;
  // currentInput = e1p1;
  // currentInput = e1p2;

  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((str) => Number(str));

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}

1977392283;
