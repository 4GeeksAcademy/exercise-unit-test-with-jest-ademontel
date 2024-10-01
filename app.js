/*
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };
*/

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dolares) => {
    //pasar de dolares a euros usando el objeto
    
return (dolares/oneEuroIs.USD)*oneEuroIs.JPY;

}
const fromEuroToDollar = (euro) => {

return euro*oneEuroIs.USD;

}
const fromYenToPound = (yen) => {

return (yen/oneEuroIs.JPY)*oneEuroIs.GBP;

}
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound}
console.log(fromYenToPound(100));