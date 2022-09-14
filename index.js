

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver[0] === name[0])
}

console.log(fuzzyMatch())

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}




// function findMatching(drivers, attribute) {
//     return drivers.filter(driver => driver.toLowerCase() === attribute.toLowerCase())
//   }
  
//   function fuzzyMatch(drivers, attribute) {
//     return drivers.filter(driver => driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
//   }
  
//   function matchName(drivers, argument) {
//     return drivers.filter(function (driver) { return driver.name === argument })
//   }






//descriptive parameter name. review callback functions

// function timesTwo() {
//     const numbers = ["A", 'B', "C", "D"]
//     numbers.map(number => number.toLowerCase())
//     console.log(numbers)
// }





// //     console.log(findMatching())




// return drivers.toLowerCase()

// const fuzzyMatch(drivers, name) = 

// const matchName = 
