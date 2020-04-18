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
  - [Javascript functions](#javascript-functions)
    - [Debounce](#debounce)
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

## Javascript functions


### Debounce
```js

    // Expected Usage
    var input = document.getElementById('search-input');

    input.addEventListener('keyup', debounce(() => {
        // immediate execution
          
      }, async () => {
          // Wait 1000 ms before execution
          res = await search(input.value);
          
      }, 1000));
    };


    /**
     * Returns a function, that, as long as it contiunes to be invoked, will not
     * be triggered. 
     * @param { function } func_immediate function to be called immediately
     * @param { function } func function to be called after it stops being called for N milliseconds.
     * @param { number } wait milliseconds before triggering function
     */
    function debounce(func_immediate, func, wait){

      var timeoutId;
    
      return () => {
        // function to trigger immediately
        func_immediate();
        
        // Each time the function calls clear timeout
        clearTimeout(timeoutId);

        // delayed call
        timeoutId = setTimeout(func, wait);
      }
    }
```


# How to publish NPM

> Please note:
> - `yarn` to install all dependencies to run `yarn test`
> - Make sure you add `.gitignore` with and ignore `node_modules` when you clone this repo.

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