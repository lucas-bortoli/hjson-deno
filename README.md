# hjson-deno

## Hjson port for Deno

[![License](https://img.shields.io/github/license/hjson/hjson-js.svg?style=flat-square)](https://github.com/hjson/hjson-js/blob/master/LICENSE)

[Hjson](https://hjson.github.io), a user interface for JSON

![Hjson Intro](https://hjson.github.io/hjson1.gif)

JSON is easy for humans to read and write... in theory. In practice JSON gives us plenty of opportunities to make mistakes without even realizing it.

Hjson is a syntax extension to JSON. It's NOT a proposal to replace JSON or to incorporate it into the JSON spec itself. It's intended to be used like a user interface for humans, to read and edit before passing the JSON data to the machine.

```Hjson
{
  # specify rate in requests/second (because comments are helpful!)
  rate: 1000

  // prefer c-style comments?
  /* feeling old fashioned? */

  # did you notice that rate doesn't need quotes?
  hey: look ma, no quotes for strings either!

  # best of all
  notice: []
  anything: ?

  # yes, commas are optional!
}
```

The JavaScript implementation of Hjson is based on [JSON-js](https://github.com/douglascrockford/JSON-js). For other platforms see [hjson.github.io](https://hjson.github.io).

# Usage

```
import * as Hjson from "https://deno.land/x/hjson_deno/mod.ts"
var obj = Hjson.parse(hjsonText);
var text2 = Hjson.stringify(obj);
```

To keep comments intact see [API](#modify--keep-comments).

# API

The API is the same for the browser and node.js version.

**NOTE that the DSF api is considered experimental**

### Hjson.parse(text, options)

This method parses *JSON* or *Hjson* text to produce an object or array.

- *text*: the string to parse as JSON or Hjson
- *options*: object
  - *keepWsc*: boolean, keep white space and comments. This is useful if you want to edit an hjson file and save it while preserving comments (default false)

### Hjson.stringify(value, options)

This method produces Hjson text from a JavaScript value.

- *value*: any JavaScript value, usually an object or array.
- *options*: object
  - *keepWsc*: boolean, keep white space. See parse.
  - *condense*: integer, will try to fit objects/arrays onto one line. Default 0 (off).
  - *bracesSameLine*: boolean, makes braces appear on the same line as the key name. Default false.
  - *emitRootBraces*: boolean, show braces for the root object. Default true.
  - *quotes*: string, controls how strings are displayed. (setting separator implies "strings")
    - "min": no quotes whenever possible (default)
    - "keys": use quotes around keys
    - "strings": use quotes around string values
    - "all": use quotes around keys and string values
  - *multiline*: string, controls how multiline strings are displayed. (setting quotes implies "off")
    - "std": strings containing \n are shown in multiline format (default)
    - "no-tabs": like std but disallow tabs
    - "off": show in JSON format
  - *separator*: boolean, output a comma separator between elements. Default false
  - *space*: specifies the indentation of nested structures. If it is a number, it will specify the number of spaces to indent at each level. If it is a string (such as '\t' or '&nbsp;'), it contains the characters used to indent at each level.
  - *eol*: specifies the EOL sequence (default is set by Hjson.setEndOfLine())
  - *colors*: boolean, output ascii color codes
  - *serializeDeterministically*: boolean, when serializing objects into hjson, order the keys based on their UTF-16 code units order. Default false.

### Hjson.endOfLine(), .setEndOfLine(eol)

Gets or sets the stringify EOL sequence ('\n' or '\r\n'). When running with node.js this defaults to os.EOL.

### Hjson.version

The version number.

## modify & keep comments

You can modify a Hjson file and keep the whitespace & comments intact (round trip). This is useful if an app updates its config file.

```
// parse, keep whitespace and comments
// (they are stored in a non enumerable __COMMENTS__ member)
const data = Hjson.parse(text, { keepWsc: true });

// modify like you normally would
data.foo = "text";

// convert back to Hjson
console.log(Hjson.stringify(data, { keepWsc: true }));
```

# History

[see history.md](history.md)

