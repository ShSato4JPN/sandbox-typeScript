type Head<T> = T extends readonly [infer H, ...any[]] ? H : never;
// テストケース
type Test1 = Head<[1, 2, 3]>; // 1
type Test2 = Head<["a", "b"]>; // "a"
type Test3 = Head<[]>; // never
