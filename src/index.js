import { allDays } from "./days/allDays";
import { noDayFound } from "./constants";
import { getAocInput } from "./utils/inputUtils";

async function runAOC() {
  const day = Number(process.argv[2]) || -1;
  const part = Number(process.argv[3]) || -1;
  const session = process.env["SESSION"] || null;
  const year = process.env["YEAR"] || null;

  if (day < 1 || day > 25) return console.log(noDayFound);

  const rawInput = await getAocInput(year, day, session);

  const daySolution = allDays[day - 1];
  if (daySolution) daySolution(day, part, rawInput);
}

runAOC();
