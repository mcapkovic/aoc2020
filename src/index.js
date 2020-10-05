import { allDays } from "./days/allDays";
import { noDayFound } from "./constants";
import { getAocInput } from "./utils/inputUtils";
import {
  printTitle,
  printAnswer,
  printError,
  printOriginalInput,
  printParsedInput,
} from "./utils/printUtils";
import { dayWelcome, part1Welcome, part2Welcome } from "./constants";

function par1(rawInput, daySolution, noInputPrint) {
  const { inputToPrint, parsedInput, parsedInputToPrint } = daySolution.inputParse(rawInput);
  printTitle(part1Welcome);
  if (!noInputPrint && inputToPrint) printOriginalInput(inputToPrint);
  if (!noInputPrint && parsedInputToPrint) printParsedInput(parsedInputToPrint);
  const answer = daySolution.partOneCode(parsedInput);
  printAnswer(answer);
}

function par2(rawInput, daySolution, noInputPrint) {
  const { inputToPrint, parsedInput, parsedInputToPrint } = daySolution.inputParse(rawInput);
  printTitle(part2Welcome);
  if (!noInputPrint && inputToPrint) printOriginalInput(inputToPrint);
  if (!noInputPrint && parsedInputToPrint) printParsedInput(parsedInputToPrint);
    const answer = daySolution.partTwoCode(parsedInput);
  printAnswer(answer);
}

async function runAOC() {
  const day = Number(process.argv[2]) || -1;
  const part = Number(process.argv[3]) || 0;
  const session = process.env["SESSION"] || null;
  const year = process.env["YEAR"] || null;

  if (day < 1 || day > 25) return printError(noDayFound);
  if (part < 0 || part > 2) return printError(noDayFound);

  const rawInput = await getAocInput(year, day, session);
  const daySolution = allDays[day - 1];
  
  printTitle(dayWelcome(day));
  if (part === 1) {
    par1(rawInput, daySolution);
  } else if (part === 2) {
    par2(rawInput, daySolution);
  } else if (part === 0) {
    par1(rawInput, daySolution);
    par2(rawInput, daySolution, "noInputPrint");
  }
}

runAOC();
