# `01` Add Bootstrap To Your Website

There are two ways to add Bootstrap into your website: Remote or Local (just like any other CSS file), the only difference will be the URL path you specify on the <link> tag (for Bootstrap's .CSS files) or <script> tag (for Bootstrap's .JS files).

This is how you do a Remote CSS Bootstrap import:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

```


Note: Don't worry about the properties like "integrity" and "crossdomain", they are required for security purposes.

This is how you add bootstrap from a local file (that is in your workplace):

```html
<link href="path/to/your/file" rel="stylesheet">
```


Note: it's a good idea to make sure that your file exists on that URL, you can test it by opening a new browser tab and pasting the path on the browser's URL (you will see the content of the file on your screen).

Bootstrap is comprised of 2 files: The CSS Stylesheet and the Javascript Source Code.

The Bootstrap CSS Stylesheet <link>  is pasted in the <head> tag before any other CSS Stylesheets.

The Javascript Source Code <link> tags are pasted right before the closing </body> tag.

For more information:
https://getbootstrap.com/docs/4.0/getting-started/introduction/

## 📝 Instructions:


1. Please add these links into your file to import Bootstrap successfully:

Bootstrap CSS StyleSheet:

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
```
Javascript Source Code:

```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```
The anchor should be a red button if everything went well.

