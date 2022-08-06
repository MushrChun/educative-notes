class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const hash = new Map()

const count_trees_recursive = function (start, end) {
    if (hash.has(`${start}:${end}`)) {
        return hash.get(`${start}:${end}`)
    }

    if (start > end) {
        return 1
    }

    let count = 0
    for (let n = start; n <= end; n++) {
        const leftTree = count_trees_recursive(start, n - 1)
        const rightTree = count_trees_recursive(n + 1, end)

        count += leftTree * rightTree
    }

    hash.set(`${start}:${end}`, count)
    return count
}

const count_trees = function (n) {
    result = count_trees_recursive(1, n)
    return result
}

console.log(`Total trees: ${count_trees(2)}`)
console.log(`Total trees: ${count_trees(3)}`)
