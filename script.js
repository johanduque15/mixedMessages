const words1 = ['Study','Work','Focus'];
const words2 = ['more','and','with'];
const words3 = ['trust','effort','discipline'];

// creating the random function

const randomFunction = number => {
    let randomNumber ;
    randomNumber = Math.floor(Math.random()*number);
    return randomNumber;
}
//create the random words
const randomWords = () => {
return (words1[randomFunction(words1.length)] + ' '+ words2[randomFunction(words2.length)] + ' ' + words3[randomFunction(words3.length)]);
}

console.log(randomWords());