## 🛠 UNDER CONSTRUCTION

## SolidJS Component library

## Installation

`yarn add simple-ui-solid`

## Intro

This project is heavily inspired by [Chakra-ui](https://github.com/chakra-ui/chakra-ui)

🗒 Since I rely a lot on these components to speed up my React development, I decided to map some of their components/derive ideas to Solid

Everything is subject to change at this point

This library utilizes CSS templates in order to map JSX props into styling. I wanted little to no overhead regarding Component rendering hence not using emotion/CSS in JS. This comes with the tradeoff of huge CSS files (mostly templates). Similarly to TailwindCSS the plan is to use the custom CLI to purge unused CSS classes within the SolidJS ***build*** package.

Classes with the component prefix `simple-ui-` that are not used will be removed from the final bundle:
```CSS
.simple-ui-borderRadius-none {
	border-radius: 0px;
}
```

## Component Progress

| Component | Status |
| --------- | ------ |
| HStack | ✅ Done |
| VStack | ✅ Done |
| Button | ⏳ In Progress |
| Input | ⏳ In Progress |
| Select | ⏳ In Progress |
| Modal | ⏳ In Progress |

## Feature Progress (planned)

| Feature | Status |
| --------- | ------ |
| Theming | ⏳ In Progress |
| Variants | ⏳ In Progress |
| CSS purging | ⏳ In Progress |
| Dark vs light | ❌  Not started |
| Doc website | ❌  Not started |
