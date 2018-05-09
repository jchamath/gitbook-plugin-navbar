# Gitbook NavBar Plugin

This GitBook plugin can be used to add a navigation bar to your book.

You can use it for your book in the book.json as follows.

Add the navbar entry into plugins array.
```
{
    "plugins": ["navbar"]
}
```

Configure navbar using pluginsConfig.
```
"pluginsConfig": {
  "navbar": {
    "logo": {
      "link": "http://example.com/",
      "image": "http://example.com/resources/static/logo.png",
      "alt": "Example"
    },
    "menu": {
      "items": [{
        "text": "Home",
        "link": "http://example.com"
      }, {
        "text": "Sigma",
        "link": "http://example.com/sigma/"
      }, {
        "text": "Contact",
        "link": "http://example.com/contact/"
      }],
      "style": {
        "color": "black",
        "hover": "#3579e2"
      }
    },
    "style": {
      "background": "white",
      "height": 50
    }
  },
}
```
