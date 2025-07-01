// 実装してください
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// テストケースe
type Test4 = MyReturnType<() => string>; // string
type Test5 = MyReturnType<(x: number) => boolean>; // boolean
type Test6 = MyReturnType<() => { name: string; age: number }>; // { name: string; age: number }
