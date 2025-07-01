type CustomReturnType<T> = T extends (...arg: any[]) => infer R ? R : never;

// テスト
type Test8 = CustomReturnType<() => string>; // string になるべき
type Test9 = CustomReturnType<(x: number) => boolean>; // boolean になるべき
type Test10 = CustomReturnType<(a: string, b: number) => void>; // void になるべき
type Test11 = CustomReturnType<string>; // never になるべき
