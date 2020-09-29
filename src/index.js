import { allDays } from "./days/allDays";
import { noDayFound } from "./constants";

function runAOC() {
  const day = Number(process.argv[2]) || -1;
  const part = Number(process.argv[3]) || -1;

  if (day < 1 || day > 25) return console.log(noDayFound);

  const daySolution = allDays[day - 1];
  if (daySolution) daySolution(day, part, "");
}

runAOC();
