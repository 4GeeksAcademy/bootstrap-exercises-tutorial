# `01` Add Bootstrap To Your Website

There are two ways to add Bootstrap into your website: Remote or Local (just like any other CSS file), the only difference will be the URL path you specify on the <link> tag (for Bootstrap's .CSS files) or <script> tag (for Bootstrap's .JS files).

This is how you do a Remote CSS Bootstrap import:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

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
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
```
Javascript Source Code:

```html
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

```
The anchor should be a red button if everything went well.

