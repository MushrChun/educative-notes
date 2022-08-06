const triplet_sum_close_to_target = function (arr, targetSum) {
    arr.sort((a, b) => a - b)

    let diff = Number.POSITIVE_INFINITY
    let closest

    for (let i = 0; i < arr.length - 2; i++) {
        const target = targetSum - arr[i]
        let left = i + 1
        let right = arr.length - 1

        while (left < right) {
            if (Math.abs(arr[left] + arr[right] - target) < diff) {
                diff = Math.abs(arr[left] + arr[right] - target)
                closest = arr[left] + arr[right] + arr[i]
            }

            if (arr[left] + arr[right] === target) {
                return targetSum
            }
            else if (arr[left] + arr[right] > target) right--
            else left++
        }
    }

    return closest
};




console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));