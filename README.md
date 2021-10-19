## 🛠 UNDER CONSTRUCTION

## SolidJS Component library

[![Version](https://img.shields.io/npm/v/simple-ui-solid.svg)](https://npmjs.org/package/simple-ui-solid)
[![Downloads/week](https://img.shields.io/npm/dw/simple-ui-solid.svg)](https://npmjs.org/package/simple-ui-solid)
[![License](https://img.shields.io/npm/l/simple-ui-solid.svg)](https://github.com/lpturmel/simple-ui-solid/blob/master/package.json)

## Installation

`yarn add simple-ui-solid`

## Intro

This project is heavily inspired by [Chakra-ui](https://github.com/chakra-ui/chakra-ui) & [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)

🗒 Since I rely a lot on these components to speed up my React development, I decided to map some of their components/derive ideas to Solid

Everything is subject to change at this point

This library utilizes most of TailwindCSS's templates in order to map JSX props into styling. I wanted little to no overhead regarding Component rendering hence not using emotion/CSS in JS. This comes with the tradeoff of huge CSS files (mostly templates). Similarly to Tailwind, the plan is to use purge the unused CSS within the SolidJS **_build_** package. This will be done with a custom CLI command that will parse the code to find used props and associate the css class to be kept in the final bundle. The parser is written in rust

Classes with the component prefix `simple-ui-` that are not used will be removed from the final bundle:

```CSS
.simple-ui-borderRadius-none {
	border-radius: 0px;
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
