const Heap = require('collections/heap'); //http://www.collectionsjs.com

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}


class EmployeeInterval {
    constructor(interval, employeeIndex, intervalIndex) {
        this.interval = interval; // interval representing employee's working hours
        // index of the list containing working hours of this employee
        this.employeeIndex = employeeIndex;
        this.intervalIndex = intervalIndex; // index of the interval in the employee list
    }
}

function find_employee_free_time(schedule) {
    let n = schedule.length;
    let result = [];
    if (schedule === null || n === 0) {
        return result;
    }
    minHeap = new Heap([], null, ((a, b) => b.interval.start - a.interval.start));
    // insert the first interval of each employee to the queue

    for (let i = 0; i < n; i++) {
        minHeap.push(new EmployeeInterval(schedule[i][0], i, 0))
    }

    let previousInterval = minHeap.peek().interval

    while (minHeap.length > 0) {
        let cur = minHeap.pop()
        if (previousInterval.end < cur.interval.start) {
            result.push(new Interval(previousInterval.end, cur.interval.start))

            previousInterval = cur.interval
        } else {
            if (previousInterval.end < cur.interval.end) {
                previousInterval = cur.interval
            }
        }

        if (cur.intervalIndex < schedule[cur.employeeIndex].length - 1) {
            minHeap.push(new EmployeeInterval(schedule[cur.employeeIndex][cur.intervalIndex + 1], cur.employeeIndex, cur.intervalIndex + 1))
        }
    }

    return result;
}


let input = [
    [new Interval(1, 3), new Interval(5, 6)],
    [new Interval(2, 3), new Interval(6, 8)],
];
process.stdout.write('Free intervals: ', end = '');
let result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

input = [
    [new Interval(1, 3), new Interval(9, 12)],
    [new Interval(2, 4)],
    [new Interval(6, 8)],
];
process.stdout.write('Free intervals: ', end = '');
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

input = [
    [new Interval(1, 3)],
    [new Interval(2, 4)],
    [new Interval(3, 5), new Interval(7, 9)],
];
process.stdout.write('Free intervals: ', end = '');
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();