export function partOneCode(input) {
  /**
   * space for the code
   */
  return "Part1 answer.";
}

export function partTwoCode(input) {
  /**
   * space for the code
   */
  return "Part2 answer.";
}

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = currentInput;
   /**
   * Add input logic here
   */

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
