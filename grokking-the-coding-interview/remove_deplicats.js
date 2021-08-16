function remove_duplicates(arr) {
    if (arr.length <= 1) return arr.length

    let slow = 0
    let fast

    for (fast = 1; fast < arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            arr[slow + 1] = arr[fast]
            slow++
        }
    }

    return slow + 1
}


console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));