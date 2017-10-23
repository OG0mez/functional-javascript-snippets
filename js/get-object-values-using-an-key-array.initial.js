const keysToGet = ['name', 'address', 'occupation'];
const person = {
  name: 'Jack',
  address: 'Streetname 1 A 13',
  age: 32,
  occupation: 'Doctor'
}

let card = {};
keysToGet.forEach((key) => {
  if(person[key]){
    card[key] = person[key];
  }
})

console.log(card)
