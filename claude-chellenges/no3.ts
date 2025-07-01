// 実装してください
type Init<T> = T extends readonly [...infer I, any] ? I : [];

// テストケース
type Test7 = Init<[1, 2, 3, 4]>; // [1, 2, 3]
type Test8 = Init<["a"]>; // []
type Test9 = Init<[]>; // []
