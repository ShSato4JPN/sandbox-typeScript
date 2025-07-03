# サバイバル TypeScript

## リテラル型

リテラル型は特定の値のみを許容する型

```typescript
let x: 1;
x = 1;
x = 100; // エラー: 型 '100' を型 '1' に割り当てることはできません。

const test = [1, 2, 3] as const; //これもリテラル型
```

## アサーション（型注釈）

変数や関数を定義する際に、その変数や関数の戻り値がどのような型を持つかを明示的に指定することができる機能。
よく使う。

```typescript
let x: 1 | 2 | 3;
x = 1; // OK
x = 4; // エラー: 型 '4' を型 '1 | 2 | 3' に割り当てることはできない

let y: number | string;
y = 1; // OK
y = "hello"; // OK
y = true; // エラー: 型 'true' を型 'number | string'
```

## 型推論

プログラマが明示的に型を宣言しなくても TypeScript が自動的にかたを推論してくれる機能。

```typescript
let x = 1 //　x は　number　型として自動的に推論される

x = 2; // OK
x = "hello"; // エラー: 型 'string' を型 'number' に

let y = 1
y = 'hello' // y は　string 型として動的に推論される
```

## プリミティブ型

JavaScript のプリミティブ型

1. 値を直接変更できない（イミュータブル）である。
2. プロパティが存在しない。（null と undefined もプリミティブ型）

|プリミティブ型|
|-|
|boolean|
|number|
|string|
|undefined|
|null|
|symbol|
|bigin|

## null と undefined の違い

### 　undefined

・「値が代入されていないため、値がない」
・プログラマが明示的に使わなくても自然に発生する値
・undefined は変数（リテラルではない）

・null は「代入すべき値が存在しないため、値がない」
・プログラマが明示的に値を設定しないt発生しない値
・null はオブジェクト

値が存在しないという意味は同じ。

基本的には undefined を使って開発していくのがベスト。（混在させない方が開発しやすい）

## symbol 型

プリミティブ型の1つ。その値がユニークになる値。boolean や number は値が同じであれば等価比較が true になる。

```typescript
const s1 = Symbol('foo')
const s2 = Symbol('foo')

console.log(s1 === s) // true
console.log(s1 === s2) // false
```

## 型強制

かたが異なる2つの値に対して演算してもエラーにならないことがある。

```typescript
let x = 1;
let y = "2";
let z = x + y; // z は "12" になる。型強制
console.log(z); // "12"
```

## ボックス化

プリミティブ型にはメソッドがないが、オブジェクトに変換してメソッドを付与することをボックス化と呼ぶ。

```typescript
const str = 'abc'
const strObject = new String(str)
strObject.length
strObject.toUpperCase()
```

ラッパーオブジェクト

|プリミティブ型|ラッパーオブジェクト|
|-|-|
|boolean|Boolean|
|number|Number|
|string|String|
|symbol|Symbol|
|bigint|BigInt|

プリミティブ型の undefined と null はラッパーオブジェクトが存在しない。

## リテラル型

プリミティブ型の値をそのまま型として扱うことができる。

プリミティブ型は JavaScript の仕様、リテラル型は値そのもを型として使う話

```typescript
let x: 1; // 1 という値のみを許容するリテラル型
let: y: "hello"; // "hello" という値のみを許容するリテラル型
let z: true; // true という値のみを許容するリテラル
```

## any 型

any 型は、どんな型の値でも許容する型。TypeScript の型チェックを無効化する。

型推論ができなければ any 型になる

## unknown 型

どんな型なのか判断できない時に使用する。
any と同様にどんな型の値でも許容するが、any 型とは異なり、unknown 型の値を使用する前に型チェックを行う必要がある。

```typescript
let value: unknown;
value = 1; // OK
value = "string"; // OK
value = { name: "オブジェクト" }; // OK
```

any から他の型に変換することは可能。
unknown から他の型に変換することはできない。
unknown はプロパティやメソッドへのアクセスもできない。
unknown はどの型にもアサーションができる。

```typescript
const value: unknown = 10;
value.toFixed(); //'value' is of type 'unknown'.

const obj: unknown = { name: "オブジェクト" };
obj.name; //'obj' is of type 'unknown'.
```
