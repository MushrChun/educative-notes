class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const build_tree_recursive = function (start, end) {
    const result = []
    if (start > end) {
        result.push(null)
        return result
    }

    for (let n = start; n <= end; n++) {
        const leftTree = build_tree_recursive(start, n - 1)
        const rightTree = build_tree_recursive(n + 1, end)

        for (let l of leftTree) {
            for (let r of rightTree) {
                const node = new TreeNode(n, l, r)
                result.push(node)
            }
        }
    }
    return result
}

const find_unique_trees = function (n) {
    result = build_tree_recursive(1, n)
    return result
}

console.log(`Total trees: ${find_unique_trees(2)}`)
console.log(`Total trees: ${find_unique_trees(3)}`)
