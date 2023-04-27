function removeUnrelated(object, key){
  const result = {...object}; // membuat shallow copy object agar tidak merubah object asli
  if (result.hasOwnProperty(key)) {
    delete result[key];
  }
  return result;
}

console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'address'))
// output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'hobbies'))
// output: { name: 'Edo', age: 20, address: 'Jakarta' }

console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'name'))
// output: { age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }