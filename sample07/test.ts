type User = { 
  name: string,
  age: number
}

function showUser(user: User): string {
  return `name: ${user.name}, age: ${user.age}`
}

const user1 = {
  name: 'satoshi',
  age: 27,
  sex: 'man'
}

const user2 = {
  name: 'azusa',
  set: 'woman'
}

console.log( showUser(user1) )
console.log( showUser(user2) )
console.log( showUser({
  name: 'foo',
  age: 30
}))
console.log( showUser({
  name: 'bar',
  age: 40,
  sex: man
}))
