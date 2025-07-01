type IsString<T> = T extends string ? "文字列" : "その他";

// テスト
type Test1 = IsString<string>; // "文字列" になるべき
type Test2 = IsString<number>; // "その他" になるべき
type Test3 = IsString<boolean>; // "その他" になるべき
