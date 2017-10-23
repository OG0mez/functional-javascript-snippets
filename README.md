# Functional JavaScript Snippets

All sorts of functional JavaScript snippets with descriptions and their "regular" counterparts.

All the snippets (in both ways) can be found in the js folder in this repository.

## Situations

- [Loop trough an Array but return an Object](#get-object-values-using-an-key-array)

## Examples

#### Get Object values using an key Array
Sometimes you want want to go trough an Array and create an Object from the result. One situation might be that you have an Array of Object keys you want to copy from another Object, and you want to loop trough those keys and retrieve their value if present.

###### Initial thought:

```JavaScript
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
```

###### More functional:
```JavaScript
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
```

Outputs:

```bash
{
  name: 'Jack',
  address: 'Streetname 1 A 13',
  occupation: 'Doctor'
}
```
