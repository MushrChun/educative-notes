const longest_substring_with_k_distinct = function (str, k) {
    let wStart = 0
    let wEnd = 0
    let longest = 0

    const cache = new Map()

    function add(key) {
        const value = cache.get(key)
        if (value) cache.set(key, value + 1)
        else cache.set(key, 1)
    }

    function remove(key) {
        const value = cache.get(key)
        if (!value) return
        if (value === 0) throw new Error('bug')
        if (value === 1) cache.delete(key)
        else cache.set(key, value - 1)
    }

    function stat() {
        return cache.size
    }

    for (wEnd = 0; wEnd < str.length; wEnd++) {
        add(str[wEnd])
        while (wStart <= wEnd && stat() > k) {
            remove(str[wStart])
            wStart++
        }

        longest = Math.max(wEnd - wStart + 1, longest)
    }

    return longest
}
