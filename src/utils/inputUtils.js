const fs = require("fs");
var fetch = require("node-fetch");

async function fetchInput(
  year = 2019,
  day = 1,
  session = "",
  path = "./input.txt"
) {
  const data = await fetch(
    `https://adventofcode.com/${year}/day/${day}/input`,
    {
      headers: {
        cookie: `session=${session}`,
      },
    }
  ).then((res) => res.text());

  if (data) {
    fs.writeFile(path, data, (err) => {
      if (err) throw err;
      console.log("New input file has been created");
    });
  }
  return data;
}

export async function getAocInput(year, day, session) {
  if (!session) {
    console.log("Missing session. Can not load data.");
    return "";
  }
  let data = null;
  const folder = `./src/days/day${day}`;
  const file = "/input.txt";
  const path = `${folder}${file}`;

  if (fs.existsSync(path)) {
    console.log("Local input file found.");
    data = fs.readFileSync(path, "utf8");
  } else {
    console.log("Fetching the input.");
    data = await fetchInput(year, day, session, path);
  }

  return data;
}
