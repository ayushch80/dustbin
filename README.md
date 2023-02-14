# Dustbin

A simple programming language made with JavaScript.
## Installation

You can install `dustbin` by downloading from NPM:

```shell
npm i -g @no-slow/dustbin
```

## Usage

The Dustbin programming language is run from the command line. There are three available commands:

-    `-v`, `--version` - print the version of Dustbin
-    `-h`, `--help` - print the help information
-    `-r`, `--run` - run a `.dump` file

Here is an example of how to run a .dump file:

```shell
dustbin -r example.dump

```

## Dustbin Syntax

The Dustbin language uses a syntax similar to JavaScript. To print output to the console, use the `dump.console` function, like so:

```javascript
dump.console(string: 'Hello, World!');
```
To pass a number, remove the quotes and prefix the value with `number:`. For example:

```javascript
dump.console(number: 42);
```

## Contributing

If you would like to contribute to the Dustbin project, feel free to fork the repository and create a pull request with your changes.
## License

Dustbin is licensed under the <b>MIT License</b>.