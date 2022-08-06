function find_word_concatenation(str, words) {
    if (words.length === 0 || words[0].length === 0) {
        return []
    }

    const map = new Map()

    for (w of words) {
        map.set(w, map.has(w) ? map.get(w) + 1 : 1)
    }

    const count = words.length
    const len = words[0].length

    const results = []

    for (let offset = 0; offset < str.length - len * count + 1; offset++) {
        let matched = 0
        const clonedMap = new Map(map)

        for (let i = 0; i < count; i++) {
            const next = str.substr(offset + i * len, len)
            console.log(next)

            if (clonedMap.has(next)) {
                clonedMap.set(next, clonedMap.get(next) - 1)
                if (clonedMap.get(next) === 0) clonedMap.delete(next)

                matched += 1

                if (matched === count) {
                    results.push(offset)
                    break
                }
            } else break
        }
    }

    return results
}


console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));