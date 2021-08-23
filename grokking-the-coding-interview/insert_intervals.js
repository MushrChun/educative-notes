class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const insert = function (intervals, new_interval) {
    let result = []
    let i = 0

    while (i < intervals.length && intervals[i].end < new_interval.start) {
        result.push(intervals[i])
        i++
    }

    while (i < intervals.length && intervals[i].start <= new_interval.end) {
        new_interval.start = Math.min(new_interval.start, intervals[i].start)
        new_interval.end = Math.max(new_interval.end, intervals[i].end)
        i++
    }

    result.push(new_interval)

    while (i < intervals.length) {
        result.push(intervals[i])
        i++
    }

    return result;
}

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();