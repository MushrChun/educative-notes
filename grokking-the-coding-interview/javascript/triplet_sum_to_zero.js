const search_triplets = function (arr) {
    triplets = []
    arr.sort((a, b) => a - b)

    function search_pair(target, left, right) {
        while (left < right) {
            if (arr[left] + arr[right] === target) {
                triplets.push([-target, arr[left], arr[right]])
                left++
                while (left < right && arr[left] === arr[left - 1]) left++
                right--
                while (left < right && arr[right] === arr[right + 1]) right--
            }
            else if (arr[left] + arr[right] > target) right--
            else left++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (i >= 1 && arr[i] === arr[i - 1]) continue
        search_pair(-arr[i], i + 1, arr.length - 1)
    }

    return triplets
};




console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));