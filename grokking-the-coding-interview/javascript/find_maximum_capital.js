const Heap = require('collections/heap')

function find_maximum_capital(capital, profits, numberOfProjects, initialCapital) {
  // minHeap for capitals
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0])
  // maxHeap for profits
  const maxHeap = new Heap([], null, (a, b) => a - b)

  for (let i = 0; i < capital.length; i++) {
    minHeap.push([capital[i], i])
  }

  let balance = initialCapital
  for (let i = 0; i < numberOfProjects; i++) {
    while (minHeap.length > 0 && minHeap.peek()[0] <= balance) {
      maxHeap.push(profits[minHeap.pop()[1]])
    }

    if (maxHeap.length === 0) break

    balance += maxHeap.pop()
  }

  return balance
}


console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`);
console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`);