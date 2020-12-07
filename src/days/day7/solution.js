const MY_BAG = "shiny gold";

export function partOneCode(input) {
  let count = new Set();
  let outermostBags = new Set([MY_BAG]);

  function countBags(currentSubBags) {
    outermostBags.clear();
    input.forEach((row) => {
      row.content.forEach((content) => {
        currentSubBags.forEach((element) => {
          if (content.bags.includes(element)) {
            const newColor = row.bag
              .replace("bags", "")
              .replace("bag", "")
              .trim();
            outermostBags.add(newColor);
            count.add(newColor);
          }
        });
      });
    });
  }

  do {
    countBags([...outermostBags]);
  } while (outermostBags.size > 0);

  return count.size;
}

export function partTwoCode(input) {
  function countBags(color) {
    let count = 0; // bags count in this iteration

    // find bag information
    input.some((row) => {
      if (!row.bag.includes(color)) return;

      const counts = row.content.map((bag) => {
        if (bag.count === 0) return 0;

        const newColor = bag.bags.replace("bags", "").replace("bag", "").trim();

        const subBagsCount = countBags(newColor);

        if (subBagsCount === 0) return bag.count; // triggered by lowest level bag
        return bag.count * subBagsCount + bag.count;
      });

      count = counts.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    });

    return count;
  }

  return countBags(MY_BAG);
}

const e1p1 = `
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
`;

const e1p2 = `
shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.
`;

export function inputParse(originalInput) {
  let currentInput = e1p1;
  currentInput = e1p2;

  currentInput = originalInput;
  let parsedInput = currentInput
    .trim()
    .split("\n")
    .map((row) => row.split("contain"))
    .map((row) => {
      return {
        bag: row[0].trim(),
        content: row[1].split(",").map((bag) => {
          const content = bag.replace(".", "").trim();
          if ("no other bags" === content) {
            return { count: 0, bags: "" };
          }
          return { count: Number(content.slice(0, 1)), bags: content.slice(2) };
        }),
      };
    });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}

// 134
// 118 too low
//145060 too low
