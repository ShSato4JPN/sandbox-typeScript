type ArrayElement<T> = T extends (infer U)[] ? U : never;

// テスト
type Test4 = ArrayElement<string[]>; // string になるべき
type Test5 = ArrayElement<number[]>; // number になるべき
type Test6 = ArrayElement<boolean[][]>; // boolean[] になるべき
type Test7 = ArrayElement<string>; // never になるべき
