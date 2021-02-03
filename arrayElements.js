const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// slice returns a section of area starting from the first given index
// stopping before the second given index.
const part = num.slice(2, 6);
console.log("Sliced array:")
console.log(part);

//splice eliminates the items with the given index.
const spliced = num.splice(1,3);
console.log(spliced);
