//const ages = [23, 22, 51, 17, 32]


const map = (arr, callback) => {
    let array = []
    for(let i =0; i< arr.length; i++) {
        let result = callback(arr[i])
        array.push(result)
    }
    return array
}

const array1 = [1, 4, 9, 16]
console.log(map(array1, x => x * 2))

