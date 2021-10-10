const Deque = require('collections/deque')

function find_permutations(nums) {
  const result = []
  const permutations = new Deque()
  permutations.push([])

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const pSize = permutations.length
    for (let k = 0; k < pSize; k++) {
      const p = permutations.shift()

      for (let j = 0; j <= p.length; j++) {
        const clone = p.slice(0)
        clone.splice(j, 0, num)

        if (clone.length === nums.length) {
          result.push(clone)
        } else {
          permutations.push(clone)
        }
      }
    }
  }

  return result
}

console.log('Here are all the permutations:');
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});