function find_letter_case_string_permutations(str) {
  const permutations = []
  permutations.push(str)

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) continue

    const len = permutations.length

    for (let j = 0; j < len; j++) {
      const permutation = permutations[j]

      const chrs = permutation.split('')
      console.log(chrs)
      if (chrs[i] === chrs[i].toUpperCase()) {
        chrs[i] = chrs[i].toLowerCase()
      } else {
        chrs[i] = chrs[i].toUpperCase()
      }
      permutations.push(chrs.join(''))
    }
  }

  return permutations
}


console.log(`String permutations are: ${find_letter_case_string_permutations('ad52')}`);
console.log(`String permutations are: ${find_letter_case_string_permutations('ab7c')}`);