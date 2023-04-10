function compareArrays(arr1, arr2) {
    let compare = (arr1, arr2) => {
        return arr1.length === arr2.length &&
        arr1.every((element, index) => element === arr2[index])
    }
    return compare(arr1, arr2)
}


function getUsersNamesInAgeRange(users, gender) {
    if(users.length == 0 || gender == "инопланетянин") {
        return 0
    }
    let arr = users.filter(item => item.gender == gender).map(item => item.age);
    let result = arr.reduce((a, b) => a + b)  
    result = result/arr.length
    return result
}