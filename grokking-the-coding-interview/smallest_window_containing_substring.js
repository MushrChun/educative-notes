function find_substring(str, pattern) {
    let windowStart = 0
    let windowEnd = 0
    let cache = new Map()
    let matched = 0
    let length = Number.POSITIVE_INFINITY
    let ans = ''

    for (p of pattern) {
        if (!cache.has(p)) cache.set(p, 0)
        cache.set(p, cache.get(p) + 1)
    }

    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rch = str[windowEnd]

        if (cache.has(rch)) {
            cache.set(rch, cache.get(rch) - 1)
            if (cache.get(rch) === 0) matched += 1
        }

        while (matched === cache.size) {
            const t_len = windowEnd - windowStart + 1
            if(t_len < length){
                length = t_len
                ans = str.substring(windowStart, windowEnd + 1)
            }

            const lch = str[windowStart]

            windowStart += 1

            if (cache.has(lch)) {
                if(cache.get(lch) === 0) matched -= 1
                cache.set(lch, cache.get(lch) + 1)
            } 
        }

    }

    return ans
};

console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));