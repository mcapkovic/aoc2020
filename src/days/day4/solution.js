export function partOneCode(input) {
  const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let validPassports = [];
  input.forEach((passport) => {
    let hasAll = true;
    required.forEach((field) => {
      if (passport[field] === undefined) hasAll = false;
    });
    if (hasAll) validPassports.push(passport);
  });
  return validPassports.length;
}

const validator = {
  byr: (data = "") => {
    const value = Number(data);
    if (value < 1920) return false;
    if (value > 2002) return false;
    return true;
  },
  iyr: (data = "") => {
    const value = Number(data);
    if (value < 2010) return false;
    if (value > 2020) return false;
    return true;
  },
  eyr: (data = "") => {
    const value = Number(data);
    if (value < 2020) return false;
    if (value > 2030) return false;
    return true;
  },
  hgt: (data = "") => {
    const heightData = data.match(/^([0-9]*)(cm|in)$/);
    if (!heightData) return false;

    const unit = heightData[2];
    const height = Number(heightData[1]);
    if (unit === "in") {
      if (height < 59) return false;
      if (height > 76) return false;
    } else {
      if (height < 150) return false;
      if (height > 193) return false;
    }
    return true;
  },
  hcl: (data = "") => {
    if (!data.match(/^#(([\da-f]{3}){1,2}|([\da-f]{4}){1,2})$/)) return false;
    return true;
  },
  ecl: (data = "") => {
    const validColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    if (!validColors.includes(data)) return false;
    return true;
  },
  pid: (data = "") => {
    if (data.length != 9) return false;
    if (isNaN(data)) return false;
    return true;
  },
};

export function partTwoCode(input) {
  const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  let validPassports = [];
  input.forEach((passport) => {
    let hasAll = true;
    required.forEach((field) => {
      if (passport[field] === undefined) hasAll = false;
      if (!validator[field](passport[field])) {
        hasAll = false;
      }
    });
    if (hasAll) validPassports.push(passport);
  });
  console.log(validPassports);
  return validPassports.length;
}

const e1p1 = `
ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in
`;

const e1p2 = `
eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007
`;

const e2p2 = `
pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
`;

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = [];

  let passport = {};

  currentInput.split("\n").forEach((row) => {
    if (row === "") {
      parsedInput.push(passport);
      passport = {};
    } else {
      row.split(" ").forEach((string) => {
        const pair = string.split(":");
        passport[pair[0]] = pair[1];
      });
    }
  });

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
