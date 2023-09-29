// Define the cats array with the initial values
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  // Append a cat to the end of the cats array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // Prepend a cat to the beginning of the cats array
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  // Remove the last cat from the cats array
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  // Remove the first cat from the cats array
  cats.shift();
}

function appendCat(name) {
  // Append a cat to the cats array and return a new array
  return [...cats, name];
}

function prependCat(name) {
  // Prepend a cat to the cats array and return a new array
  return [name, ...cats];
}

function removeLastCat() {
  // Remove the last cat from the cats array and return a new array
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // Remove the first cat from the cats array and return a new array
  return cats.slice(1);
}

// Export the functions if needed
module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
