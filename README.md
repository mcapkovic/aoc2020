# aoc-node-template

aoc-node-template is a node js template for advent of code

## Installation

clone the repo and run 

```bash
npm install
```

## Usage

- create .env file in the root with your session and year 

    ```js
    SESSION="" // your aoc session
    YEAR="2017" // aoc year
    ```

- edit your code in the `src/days/day{x}/solution.js` where x is the day number ( `src/days/day1/solution.js` for day1 )

- run the code and download aoc input run:
    ```bash
    npm run day 1 1 # run day {day} part {part}
    ```

    ( aoc input will be downloaded only once and saved to input.txt )


## License
[MIT](https://choosealicense.com/licenses/mit/)