function removeLeftRight(arr, position) {
  if (position === 'left') {
    arr.shift(); // menghapus element di awal array
  } else if (position === 'right') {
    arr.pop(); // menghapus element di akhir array
  }
  return arr;
}

console.log(removeLeftRight([1, 2, 3, 4, 5], 'left'))
// output: [2, 3, 4, 5]

console.log(removeLeftRight([1, 2, 3, 4, 5], 'right'))
// output: [1, 2, 3, 4]

console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], 'left'))
// output: ["Budi", "Joko", "Tono"]

console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], 'right'))
// output: ["Edo", "Budi", "Joko"]