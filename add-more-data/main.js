function addMoreData(object, key, value) {
    // Menggunakan Object.assign
    return Object.assign({}, object, { [key]: value });
  
    // Alternatif dengan menggunakan spread operator
    return { ...object, [key]: value };
    
    // Alternatif dengan menggunakan dot notation
    object[key] = value;
    return object;
    
    // Alternatif dengan menggunakan bracket notation
    object[key] = value;
    return object;
}

console.log(addMoreData({ name: 'Edo', age: 20 }, 'address', 'Jakarta'));
// Output: { name: 'Edo', age: 20, address: 'Jakarta' }

console.log(addMoreData({ name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading']));
// Output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

console.log(addMoreData({ name: 'Edo', age: 20 }, 'isMarried', false));
// Output: { name: 'Edo', age: 20, isMarried: false }