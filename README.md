Space JS
==================

### Introduction ###
* Space JS provides a space theme with "warp" effect, which replaces the usual boring loading icon.
* jQuery is required.
* Demo: http://spacejs.ap01.aws.af.cm/

### Usage ###
Make sure you add the following lines into your HTML:
```html
<div id="space">
  <div class="space-content">
    <!-- Your content goes here. -->
  </div>
</div>
```
Initialize the script:
* Params: content-width, content-height (pixels) define the size of the content container. The container is always at the center of the screen.

```javascript
$.space().init(content-width,content-height);
```
Show "warp" effect, move out the content
```javascript
$.space().jump();
```
Stop "warp" effect, move in the content
```javascript
$.space().stop();
```
