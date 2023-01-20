const words1 = ['Study','Work','Focus'];
const words2 = ['more','and','with'];
const words3 = ['trust','effort','discipline'];

// creating the random function

const randomFunction = number => {
    let randomNumber ;
    randomNumber = Math.floor(Math.random()*number);
    return randomNumber;
}

console.log(randomFunction(words1.length));
console.log(words1[randomFunction(words1.length)]);