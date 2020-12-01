connect branch to private repo

display remotes
```bash
git remote -v

aoc2017	https://github.com/mcapkovic/aoc2017.git (fetch)
aoc2017	https://github.com/mcapkovic/aoc2017.git (push)
origin	https://github.com/mcapkovic/aoc-node-template.git (fetch)
origin	https://github.com/mcapkovic/aoc-node-template.git (push)
```

add new remote
```bash
git remote add aoc2020 https://github.com/mcapkovic/aoc2020.git
```

display remotes
```bash
git remote -v

aoc2017	https://github.com/mcapkovic/aoc2017.git (fetch)
aoc2017	https://github.com/mcapkovic/aoc2017.git (push)
aoc2020	https://github.com/mcapkovic/aoc2020.git (fetch)
aoc2020	https://github.com/mcapkovic/aoc2020.git (push)
origin	https://github.com/mcapkovic/aoc-node-template.git (fetch)
origin	https://github.com/mcapkovic/aoc-node-template.git (push)
```


// add upstrem to branch 2020
```bash
git branch --set-upstream-to=aoc2020/2020 2020
```
