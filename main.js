// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
// 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
// 3. makeSandwich will return our newly created sandwich
// 4. Call it a few times passing in different arguments to make different sandwiches!

const makeSandwhich = (protein, cheese, veggie, bread) => {
    return {
        protein: protein,
        cheese: cheese,
        veggie: veggie,
        bread: bread
    }
}

const firstSammy = makeSandwhich("salami", "provolone", "lettuce", "white")
const secondSammy = makeSandwhich("pepperoni", "white american", "pickles", "wheat")
const thirdSammy = makeSandwhich("porchetta", "provolone", "broccoli rabe", "Italian")
const fourthSammy = makeSandwhich("salami", "white american", "lettuce", "white")
console.log(firstSammy)
console.log(secondSammy)
console.log(thirdSammy)
console.log(fourthSammy)