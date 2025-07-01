type CustomAwaited<T> = T extends Promise<infer U> ? Awaited<U> : T;

// テスト
type Test14 = CustomAwaited<Promise<string>>; // string になるべき
type Test15 = CustomAwaited<Promise<Promise<number>>>; // number になるべき
type Test16 = CustomAwaited<string>; // string になるべき
type Test17 = CustomAwaited<Promise<boolean[]>>; // boolean[] になるべき

type Test18 = Awaited<Promise<Promise<Promise<Promise<string>>>>>;
