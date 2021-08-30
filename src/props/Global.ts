export function mapPropsToTw<T>(props: T) {
    // This type annotation is to have the proper types returned from Object.keys(x)
    // By design it returns a string[]
    let classString = "";
    (Object.keys(props) as Array<keyof T>).forEach((prop) => {
        classString += `${prop}-${props[prop]} `;
    });
    return classString;
}

export type TailwindRemValues =
    | 0
    | 0.5
    | 1
    | 1.5
    | 2
    | 2.5
    | 3
    | 3.5
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 14
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | 44
    | 48
    | 52
    | 56
    | 60
    | 64
    | 72
    | 80
    | 96;
