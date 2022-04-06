type State = {
  id?: number,
  name?: number,
  [k: string]: number
}

const state: State = {
  id: 1,
  name: 'Taro',
  test: 'hello'
}

state.id = 2
state.name = 'Han'

console.log('test')