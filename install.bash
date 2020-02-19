#!/usr/bin/env bash

# first, initialize the repo
npm init --force

# next, install typescript
npm add typescript --save-dev

# next, add a tsconfig.
# we do this by running the typescript compiler, 
# tsc, passing in the --init flag.
# it happens to be installed to 
# ./node_modules/typescript/bin/tsc
./node_modules/typescript/bin/tsc --init

# also add types for nodejs
npm add @types/node

# make a file for the user to use
touch typed.ts

