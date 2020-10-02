// export const dayWelcome = (dayNumber) =>
//   `############ Hello, from day ${dayNumber} ############`;

export const dayWelcome = (dayNumber) => {
  if (dayNumber > 9)
    return `######################################
#------------ Day${dayNumber} -----------------#
######################################`;

  return `######################################
#------------- Day${dayNumber} -----------------#
######################################`;
};

export const part1Welcome = `#---- First part of the solution ----#
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓`;

export const part2Welcome = `#--- Second part of the solution ----#
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓`;
// export const part2Welcome = "-- Second part of the solution --";

export const noDayFound = "no day found";
export const loadingFile = "Loading input from the local file.";
export const missingSession = "Missing session. Can not fetch the input.";
export const inputFetching = "Fetching the input.";
