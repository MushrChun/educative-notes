function circular_array_loop_exists(arr) {
    for (let i = 0; i < arr.length; i++) {
        let is_forward = arr[i] > 0

        let slow = i
        let fast = i
        while (true) {
            slow = find_next_index(slow, is_forward, arr)
            fast = find_next_index(fast, is_forward, arr)

            if (fast != -1) fast = find_next_index(fast, is_forward, arr)

            if (slow === -1 || fast === -1) break

            if (slow === fast) return true
        }
    }

    return false
}

function find_next_index(cur, is_forward, arr) {
    const direction = arr[cur] > 0
    if (direction != is_forward) return -1

    let next = (cur + arr[cur]) % arr.length
    if (next < 0) next += arr.length

    if (next === cur) return - 1

    return next
}


console.log(circular_array_loop_exists([1, 2, -1, 2, 2]));
console.log(circular_array_loop_exists([2, 2, -1, 2]));
console.log(circular_array_loop_exists([2, 1, -1, -2]));