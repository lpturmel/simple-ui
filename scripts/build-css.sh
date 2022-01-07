./node_modules/.bin/postcss src/index.css -o ./dist/theme.css
purgecss --css ./dist/theme.css  --content src/**/*.tsx src/**/*.ts -o ./dist/theme.css