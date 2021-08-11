function find_permutation(str, pattern) {
    let windowStart = 0
    let windowEnd = 0
    let cache = new Map()
    let match = 0

    for (p of pattern) {
        if (!cache.has(p)) cache.set(p, 0)
        cache.set(p, cache.get(p) + 1)
    }

    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rch = str[windowEnd]

        if (cache.has(rch)) {
            cache.set(rch, cache.get(rch) - 1)
            if (cache.get(rch) === 0) match += 1
        }

        if (match === cache.size) return true

        if (windowEnd >= pattern.length - 1) {
            const lch = str[windowStart]

            windowStart += 1

            if (cache.has(lch)) {
                if(cache.get(lch) === 0) match -= 1
                cache.set(lch, cache.get(lch) + 1)
            }
        }
    }

    return false
};

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);