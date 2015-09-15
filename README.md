# jQuery Webino Ajax

Ajax made easy. Updates the elements by diffing.


## Dependencies

- [jQuery](https://jquery.com)

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
```

- [diffHTML - jQuery](https://github.com/webino/diffhtml-jquery)

```html
<script src="//cdn.jsdelivr.net/diffdom/0.0.1/diffdom.min.js" type="text/javascript"></script>
<script src="//cdn.rawgit.com/webino/diffhtml-jquery/develop/src/diffhtml.jquery.js" type="text/javascript"></script>
```

## How To

Add those dependencies above and the following script to your ``index.html`` file:

```html
<script src="//cdn.rawgit.com/webino/webino-ajax-jquery/develop/src/webino.ajax.jquery.js" type="text/javascript"></script>
```

Ajax navigation HTML element:

```html
<nav class="ajax"><a href="example.json">Click me!</a></nav>
```

Ajax link HTML element:

```html
<nav class="ajax"><a href="example.json">Click me!</a></nav>
<a class="ajax" href="example.json">Click me!</a>
```

Ajax fragment HTML:

```html
<div id="my-content">Text example...</div>
```

Expected JSON structure:

```json
{
  "fragments": {
    "#my-content": "<div id=\"my-element\">Text example updated...</div>"
  }
}
```


## Addendum

This package is used by the [Webino™ project](https://github.com/webino/Webino).

Please, report any issues and don't hesitate to contribute.

[Report a bug](https://github.com/webino/webino-ajax-jquery/issues) | [Fork me](https://github.com/webino/webino-ajax-jquery)
