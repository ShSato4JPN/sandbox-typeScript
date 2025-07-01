interface Test01 {
  name: string,
  age: number
  sex?: string
}

type Test02 = {
  name: string,
  age: number
}

let test1: Test01 = {
  name: 'test01',
  age: 10
}

let test2: Test02 = {
  name: 'test2',
  age: 20
}

let test3: Test01 = {
  name: 'test3',
  age: 30,
  sex: 'man'
}
