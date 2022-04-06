export function test(): Number {
  return 1000
}

export function test1(name: String): String {
  return 'hello. ${name}'
}

export function test2(name: String, age: Number): String {
  return 'name: ${name}, age: ${age}'
}

export function test3(name, age): String {
  return 'name: ${name}, age: ${age}'
}

export function test4(): object {
  return {value: 'foo'}
}

export function test5(): any {
  return null
}

export function test6(str: string) {
  let value = 'test'
}