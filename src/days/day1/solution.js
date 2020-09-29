import { dayWelcome, part1Welcome, part2Welcome } from "../../constants";

function part1(input) {
  console.log(part1Welcome);

  /**
   * space for the code
   */
}

function part2(input) {
  console.log(part2Welcome);

  /**
   * space for the code
   */
}

const allParts = [part1, part2];

export function solution(dayNumber, partNumber, input) {
  console.log(dayWelcome(dayNumber));
  let todaysInput = input;

  if (partNumber > 0) {
    const requestedPart = allParts[partNumber - 1];
    if (requestedPart) requestedPart(todaysInput);
  } else {
    allParts.forEach((part) => part(todaysInput));
  }
}
