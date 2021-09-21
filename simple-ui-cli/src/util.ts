import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";

function fromDir(
  startPath: string,
  filter: RegExp,
  callback: (filename: string) => void
) {
  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback); //recurse
    } else if (filter.test(filename)) callback(filename);
  }
}
export function parseStateProps(state: string, stateType: string) {
  let returnString = "";

  const items = state.trim().split(" ");
  items.forEach((item) => {
    returnString += `${stateType}:${item} `;
  });
  return returnString;
}

export function mapPropsToTw<T>(props: T) {
  // This type annotation is to have the proper types returned from Object.keys(x)
  // By design it returns a string[]
  let classString = "";

  (Object.keys(props) as Array<keyof T>).forEach((prop) => {
    if (typeof props[prop] === "object") {
      const stateProps = mapPropsToTw(props[prop]);

      classString += parseStateProps(
        stateProps,
        (prop as string).replace("_", "")
      );
    } else {
      classString += `${prop}-${props[prop]} `.replace(".", "-");
    }
  });
  return classString;
}

fromDir("../my-app/src/", /\.*[^stories]\.tsx$/, function (filename) {
  console.log("Processing: ", chalk.blue(filename));

  const jsxOnly = /\s<[A-Z][\s\S]*<\/[A-Z].*>$/gm;
  const propOnly = /^\s*[a-z|_].*=.*/gm;

  const content = fs
    .readFileSync(filename)
    .toString()
    .replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");

  const result = content.match(jsxOnly)![0];

  const propsArray = result.match(propOnly);

  const usedClasses = [];

  if (propsArray) {
    const tmp: any = {};
    propsArray.forEach((prop) => {
      const values = prop.split("=");
      if (values[0].startsWith("_")) {
        tmp[values[0]] = JSON.parse(
          values[1]
            .replace("{{", "{")
            .replace("}}", "}")
            .replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
              return (
                '"' + matchedStr.substring(0, matchedStr.length - 1) + '":'
              );
            })
        );
      } else {
        tmp[values[0]] = values[1].replace(/^"|"|{|}$/g, "");
      }
    });

    const string = mapPropsToTw(tmp);
    console.log(string);
  }
});
