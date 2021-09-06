simple-ui-cli
=============

Parse simple-ui components to remove unused css

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/simple-ui-cli.svg)](https://npmjs.org/package/simple-ui-cli)
[![Downloads/week](https://img.shields.io/npm/dw/simple-ui-cli.svg)](https://npmjs.org/package/simple-ui-cli)
[![License](https://img.shields.io/npm/l/simple-ui-cli.svg)](https://github.com/lpturmel/simple-ui-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g simple-ui-cli
$ simple-ui-cli COMMAND
running command...
$ simple-ui-cli (-v|--version|version)
simple-ui-cli/0.0.0 darwin-arm64 node-v16.3.0
$ simple-ui-cli --help [COMMAND]
USAGE
  $ simple-ui-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`simple-ui-cli hello [FILE]`](#simple-ui-cli-hello-file)
* [`simple-ui-cli help [COMMAND]`](#simple-ui-cli-help-command)

## `simple-ui-cli hello [FILE]`

describe the command here

```
USAGE
  $ simple-ui-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ simple-ui-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/lpturmel/simple-ui-cli/blob/v0.0.0/src/commands/hello.ts)_

## `simple-ui-cli help [COMMAND]`

display help for simple-ui-cli

```
USAGE
  $ simple-ui-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
