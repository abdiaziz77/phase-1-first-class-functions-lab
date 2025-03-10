// Code your solution in this file!
// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    console.log("First two drivers:", drivers.slice(0, 2));
    return drivers.slice(0, 2);
};


const returnLastTwoDrivers = function(drivers) {
    console.log("Last two drivers:", drivers.slice(-2));
    return drivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log("Selecting drivers array:", selectingDrivers);


const createFareMultiplier = function(multiplier) {
    return function(fare) {
        const result = fare * multiplier;
        console.log(`Fare multiplier (${multiplier}x):`, result);
        return result;
    };
};


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

console.log("Doubled fare (5):", fareDoubler(5));
console.log("Tripled fare (5):", fareTripler(5));


const selectDifferentDrivers = function(arrayOfDrivers, selectingFunction) {
    const result = selectingFunction(arrayOfDrivers);
    console.log("Selected drivers:", result);
    return result;
};


const drivers = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

console.log("First two drivers test:", returnFirstTwoDrivers(drivers));
console.log("Last two drivers test:", returnLastTwoDrivers(drivers));

console.log("Selecting first two:", selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log("Selecting last two:", selectDifferentDrivers(drivers, returnLastTwoDrivers));
