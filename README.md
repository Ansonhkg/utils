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
  - [math](#math)
    - [Add commas to digit](#add-commas-to-digit)
  - [ui](#ui)
    - [Remove html tags from string](#remove-html-tags-from-string)
    - [Dynamically changes a div height based on if div has touched footer](#dynamically-changes-a-div-height-based-on-if-div-has-touched-footer)
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

## math

### Add commas to digit
```js
import utils from '@ansonhkg/utils';

var value = 1000000

var output = utils.math.commas(value);

// expected outcome 1,000,000
```

## ui

### Remove html tags from string
```js
import utils from '@ansonhkg/utils';

var string = '<h1>food</h1>';

var new_string = utils.ul.html(string);

// expected outcome food
```

### Dynamically changes a div height based on if div has touched footer
```js
import utils from '@ansonhkg/utils';

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        if (window.innerWidth >= 1024) {
          utils.ul.dynamicDiv('header', 'targetDiv', 'footer')
        }
      })
    })
  }

```