//`findMatching`- This function takes an array of drivers' names and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

//


function findMatching(drivers, string) {

    const newArray = drivers.filter(driver => driver.toLowerCase() === string)

    return newArray

}