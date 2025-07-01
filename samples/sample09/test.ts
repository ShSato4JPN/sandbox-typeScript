type User = {
  test: boolean,
  name: string,
  [k: string]: boolean | string | number
}

type Foo = {
  [k: string]: string | number
}

const userA: User = {
  test: true,
  name: 'Taro',
  age: 26
}

const bar: Foo = {
  foo: 'hello',
  bar: 'hoge',
  hoge: 10
}

const x = userA.name
const y = userA.age