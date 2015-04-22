Angular directive slider control.

**No JQUERY dependency needed anymore**

**Skins available**

Welcome to a fork from awesome job of Egor Khmelev https://github.com/darul75/ng-slider

How to use it
-------------

You should already have script required for Angular.

```html
<script type="text/javascript" src="angular.min.js"></script>
```

to the list above, you should add:

```html
<link rel="stylesheet" type="text/css" href="awesome-range-slider.min.css">
```

```html
<script type="text/javascript" src="awesome-range-slider.min.js"></script>
```
in case you want to use your own template, omit the last line and instead add some template code
to your project:
```html
<script type="text/ng-template" id="aw-select.tmpl.html">
    ....
</script>
```

Then, inject `awesomeRangeSlider` in your application module:

```javascript
angular.module('myApp', ['awesomeRangeSlider']);
```

and then just add an `input` with `slider` directive name attribute, `value` and `options` scope variable attribute.

```html
<input ng-model="value" type="text" id="mySlider1" awesome-range-slider options="options" />
```

'value' your slider scope end value, as string.
'options' slider scope options value as json.
'ng-disabled' angular common attribute.

```javascript
$scope.value = "10";
// $scope.value = "10;15"; FOR DOUBLE VIEW
```

### Options

Options for your slider in json format {from:.....}

* `from`: start value
* `to`: end value
* `step`: step value
* `dimension`: string, example " $"
* `scale`: array for scale
* `round`: how many numbers allowed after comma
* `smooth`: true/false; false snaps the button to value
* `vertical`: true/false; vertical slider, default false
* `skin`: empty or 'blue' 'plastic' 'round'
* `css`: hash object, do not mix with 'skin' !
* `realtime`: triggers changes and model update on every moves
* `threshold`: minimum distance allowed between 2 pointers, default both pointers overlap 

```
css: {
	background: {"background-color": "silver"},
	before: {"background-color": "purple"},// zone before default value
	default: {"background-color": "white"}, // default value: 1px
	after: {"background-color": "green"},  // zone after default value
	pointer: {"background-color": "red"}   // circle pointer
	range: {"background-color": "red"} // use it if double value
}
````
* `callback` : function triggering current value, can be useful

```javascript
// example
callback: function(value, released) {
	// useful when combined with 'realtime' option
	// released it triggered when mouse up
	console.log(value + " " + released);
}
```

Installation
------------

Using bower:

```
bower install awesome-range-slider
```

RELEASE
-------------

* 0.1.0: Customized version of darul's ng-slider -- https://github.com/darul75/ng-slider

### Build

You can run the tests by running

```
npm install
```
or
```
npm test
```

assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```

## License

The MIT License (MIT)

Copyright (c) 2015 Kanagu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.




