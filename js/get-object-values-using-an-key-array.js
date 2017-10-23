const keysToGet = ['name', 'address', 'occupation'];
const person = {
  name: 'Jack',
  address: 'Streetname 1 A 13',
  age: 32,
  occupation: 'Doctor'
}

const card = keysToGet.reduce((obj, key) => {
  if(person[key]){
    obj[key] = person[key];
  }
  return obj;
}, {})

console.log(card)
