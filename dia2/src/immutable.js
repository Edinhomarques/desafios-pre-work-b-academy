const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = {...john, hobbies: []}

jane.name = 'Jane'
jane.hobbies.push('MuayThai', 'Programming')

// Outra forma 
const edson = {
  ...john,
  name: 'edson',
  age: 25,
  hobbies: ['Play game', 'Programming']

}

console.log('John:', john)
console.log('Jane:', jane)
console.log('Edson', edson)
