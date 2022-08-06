const Heap = require('collections/heap')

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const find_next_interval = function (intervals) {
  const startHeap = new Heap([], null, (a, b) => b[0].start - a[0].start)
  const endHeap = new Heap([], null, (a, b) => b[0].end - a[0].end)

  for (let i = 0; i < intervals.length; i++) {
    startHeap.push([intervals[i], i])
    endHeap.push([intervals[i], i])
  }

  const result = Array(intervals.length).fill(0)

  while (endHeap.length > 0) {
    const end = endHeap.pop()

    let start
    while (startHeap.length > 0 && startHeap.peek()[0].start <= end[0].end + 1) {
      start = startHeap.pop()
    }

    if (!start) {
      result[end[1]] = -1
      continue
    }

    const gap = start[0].start - end[0].end

    if (gap <= 1 && gap >= 0) {
      result[end[1]] = start[1]
    } else {
      result[end[1]] = -1
    }
  }

  return result
}


result = find_next_interval(
  [new Interval(2, 3), new Interval(3, 4), new Interval(5, 6)])
console.log(`Next interval indices are: ${result}`)


result = find_next_interval(
  [new Interval(3, 4), new Interval(1, 5), new Interval(4, 6)])
console.log(`Next interval indices are: ${result}`)