## 🛠 UNDER CONSTRUCTION

## SolidJS Component library

[![Version](https://img.shields.io/npm/v/simple-ui-solid.svg)](https://npmjs.org/package/simple-ui-solid)
[![Downloads/week](https://img.shields.io/npm/dw/simple-ui-solid.svg)](https://npmjs.org/package/simple-ui-solid)
[![License](https://img.shields.io/npm/l/simple-ui-solid.svg)](https://github.com/lpturmel/simple-ui-solid/blob/master/package.json)

## Installation

`yarn add simple-ui-solid`

## Intro

This project is heavily inspired by [Chakra-ui](https://github.com/chakra-ui/chakra-ui) & [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)

Since I rely a lot on these components to speed up my React development, I decided to map some of their components/derive ideas to Solid

Everything is subject to change at this point, the library is not usable at the moment, too many features/design decisions are still pending

## The idea

This library utilizes most of **TailwindCSS**'s templates and values but in a JSX prop manner.

The styling is made by mapping all style props to a class string that matches the **CSS templates** (no CSS in JS). I wanted little to no overhead regarding Component rendering to fully embrace SolidJS's performance. This comes with the tradeoff of huge CSS files currently `675Kb (no gzip)`. Since this is not shippable to any form of client, the solution is to purge the unused CSS within the SolidJS **_build_** package with a postbuild script. This script will invoke a custom CLI command that will parse the code and configs to find used props and associate the css classes to be kept in the final bundle.

The parser is currently being written in rust (faster than js at scale and most JS tooling is moving to Rust/Go).

Classes with the component prefix `simple-ui-` that are not used will be removed from the final bundle:

### Example

```js
<Button borderRadius="md"> Save </Button>
```
The component prop will result in the following class on the element: `simple-ui-borderRadius-md` that maps to the library class:

```CSS
.simple-ui-borderRadius-md {
	border-radius: 0.375rem;
}
```

## Component Progress

| Component | Status         |
| --------- | -------------- |
| HStack    | ✅ Done        |
| VStack    | ✅ Done        |
| Divider   | ✅ Done        |
| Link      | ✅ Done        |
| Text      | ✅ Done        |
| Button    | ⏳ In Progress |
| Input     | ⏳ In Progress |
| Select    | ⏳ In Progress |
| Modal     | ⏳ In Progress |

## Feature Progress (planned)

| Feature               | Status                |
| --------------------- | --------------------- |
| TailwindCSS templates | ✅ Done (need review) |
| Rust parser           | ⏳ In Progress        |
| Theming               | ⏳ In Progress        |
| Variants              | ⏳ In Progress        |
| CSS purging           | ⏳ In Progress        |
| Dark vs light         | ⏳ In Progress        |
| Doc website           | ⏳ In Progress        |
