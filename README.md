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
import utils from '@ansonhkg/utils';

var input = [1,2,3,4,5];

var output = utils.array.cusum(input);

// expected output: [1,3,6,10,15]

```

## Image

### Save Div as Image
```html
<!-- target div -->
<div id="divId"></div>
```

```js
import utils from '@ansonhkg/utils';

utils.image.saveDiv("divId", 'filename');

```