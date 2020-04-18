# What is this?

A utils library for personal use.

- [What is this?](#what-is-this)
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
- [Usage](#usage)
  - [Images](#images)
    - [Save Div as Image](#save-div-as-image)
  - [Math](#math)
    - [Add commas to digit](#add-commas-to-digit)
    - [Cusum](#cusum)
  - [UI](#ui)
    - [Remove html tags from string](#remove-html-tags-from-string)
    - [Dynamically changes a div height based on if div has touched footer](#dynamically-changes-a-div-height-based-on-if-div-has-touched-footer)
- [How to publish NPM](#how-to-publish-npm)
# Installation

## npm
`npm i @ansonhkg/utils --save`

## yarn

`yarn add @ansonhkg/utils`

Then ...

# Usage


## Images

### Save Div as Image
```html
<!-- target div -->
<div id="divId"></div>
```

```js
import utils from '@ansonhkg/utils';

utils.image.saveDiv("divId", 'filename');

```

## Math

### Add commas to digit
```js
import utils from '@ansonhkg/utils';

var value = 1000000

var output = utils.math.commas(value);

// expected outcome 1,000,000
```

### Cusum
``` js
import utils from '@ansonhkg/utils';

var input = [1,2,3,4,5];

var output = utils.array.cusum(input);

// expected output: [1,3,6,10,15]

```

## UI

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


# How to publish NPM

`yarn` to install all dependencies to run `yarn test`

Make sure you have login to npm

```npm login```

initialize

```npm init ```

inside `package.json`, add the following to your scripts

```json
  "scripts": {
    "dev": "parcel ./src/index.html",
    "test": "jest",
    "publish:patch": "yarn version --patch && yarn publish",
    "publish:minor": "yarn version --minor && yarn publish",
    "publish:major": "yarn version --major && yarn publish"
  },
```

Your your new version when it prompts `question New version` eg 0.0.35 when patching.

