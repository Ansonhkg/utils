# What is this?

A utils library for personal use.

# Installation

## npm
`npm i utils@ansonhkg --save`

## yarn

`yarn add utils@ansonhkg`

Then ...

``` js
import { cusum } from 'utils@ansonhkg';

var input = [1,2,3,4,5];

var output = cusum(input);

// expected output: [1,3,6,10,15]
```

