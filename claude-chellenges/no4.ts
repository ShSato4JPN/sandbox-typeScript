// 実装してください
//type GetProperty<T, K> = K extends keyof T ? T[K] : never;
type GetProperty<T, K> = K extends keyof T ? T[K] : never;

// テストケース
type User = { name: string; age: number; email: string };
type Test10 = GetProperty<User, "name">; // string
type Test11 = GetProperty<User, "age">; // number
type Test12 = GetProperty<User, "invalid">; // never
