# jQuery Webino Ajax

- webio.ajax.jquery.js

Ajax made easy.


## Requirements

- [jQuery](https://jquery.com)

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
```

- [diffHTML-jquery](https://github.com/webino/diffhtml-jquery)

```html
<script src="//cdn.jsdelivr.net/diffdom/0.0.1/diffdom.min.js" type="text/javascript"></script>
<script src="//cdn.rawgit.com/webino/diffhtml-jquery/develop/src/diffhtml.jquery.js" type="text/javascript"></script>
```

## How To

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

