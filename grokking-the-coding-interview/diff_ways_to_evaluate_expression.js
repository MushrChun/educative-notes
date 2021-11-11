function diff_ways_to_evaluate_expression(input) {

  if (!input.includes('+') && !input.includes('-') && !input.includes('*')) {
    return [parseInt(input, 10)]
  } else {
    const result = []
    for (let i = 0; i < input.length; i++) {
      const c = input[i]
      if (c === '+' || c === '-' || c === '*') {
        const left = diff_ways_to_evaluate_expression(input.substring(0, i))
        const right = diff_ways_to_evaluate_expression(input.substring(i + 1))

        for (let l of left) {
          for (let r of right) {
            if (c === '+') {
              result.push(l + r)
            } else if (c === '-') {
              result.push(l - r)
            } else if (c === '*') {
              result.push(l * r)
            }
          }
        }
      }
    }

    return result
  }
}

console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('1+2*3')}`);
console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('2*3-4-5')}`);