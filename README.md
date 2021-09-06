## 🛠 UNDER CONSTRUCTION

## SolidJS Component library

This project is heavily inspired by [Chakra-ui](https://github.com/chakra-ui/chakra-ui)

🗒 Since I rely a lot on these components to speed up my React development, I decided to map some of their components/derive ideas to Solid

Everything is subject to change at this point

## Installation

`yarn add simple-ui-solid`

**_Note_**

It is highly recommended to purge our css classes with the purgecss library. Inside your Solid project, add this script in your `package.json`

This will drammatically reduce the bundle size delivered to your users

```
"scripts": {
    ...
    "postbuild": "purgecss --css dist/assets/*.css --content dist/index.html dist/assets/*.js --output dist/assets"
},
```
