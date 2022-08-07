from heapq import *


class Interval:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def __lt__(self, other):
        return self.end < other.end


def min_meeting_rooms(intervals):
    intervals.sort(key=lambda x: x.start)

    min_heap = []

    max_room = 0

    for i in range(0, len(intervals)):
        interval = intervals[i]

        if len(min_heap) == 0 or interval.start < min_heap[0].end:
            heappush(min_heap, interval)

            max_room = max(max_room, len(min_heap))
        else:
            while min_heap[0].end > interval.start:
                heappop(min_heap)

    return max_room


def main():

    print(get_minimal([Interval(1, 4), Interval(2, 5), Interval(7, 9)]))
    print(get_minimal([Interval(6, 7), Interval(2, 4), Interval(8, 12)]))
    print(get_minimal([Interval(1, 4), Interval(2, 3), Interval(3, 6)]))
    print(get_minimal([Interval(4, 5), Interval(
        2, 3), Interval(2, 4), Interval(3, 5)]))


main()
