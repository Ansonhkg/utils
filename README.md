# What is this?

A utils library for personal use.

# Installation

## npm
`npm i utils@ansoncheung.me --save`

## yarn

`yarn add utils@ansoncheung.me`

Then ...

``` js
import { cusum } from 'utils@ansoncheung.me';

var input = [1,2,3,4,5];

var output = cusum(input);

// expected output: [1,3,6,10,15]
```

