# What is this?

A utils library for personal use.

- [What is this?](#what-is-this)
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
- [Usage](#usage)
  - [Array](#array)
    - [Cusum](#cusum)
  - [Image](#image)
    - [Save Div as Image](#save-div-as-image)
# Installation

## npm
`npm i @ansonhkg/utils --save`

## yarn

`yarn add @ansonhkg/utils`

Then ...

# Usage

## Array

### Cusum
``` js
import { cusum } from '@ansonhkg/utils';

var input = [1,2,3,4,5];

var output = cusum(input);

// expected output: [1,3,6,10,15]
```

## Image

### Save Div as Image
```js
import { saveDivAsImage } from '@ansonhkg/utils';

saveDivAsImage("your-div-id", 'your-custom-file-name');

```
