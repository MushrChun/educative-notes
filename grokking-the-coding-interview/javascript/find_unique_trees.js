class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const find_unique_trees = function (n) {
  const nums = new Set()
  for (let i = 1; i <= n; i++) {
    nums.add(i)
  }
  result = []

  for (let i = 1; i <= n; i++) {
    const tmp = new Set(nums)
    tmp.delete(i)

    const size = result.length
    if (size === 0) {
      result.push(new TreeNode(i))
    } else {
      for (let j = 0; j < size; j++) {
        const rootNode = result[j]

        dfs(i, rootNode, rootNode, result)
      }
    }
  }
  return result
};

const clone_tree = function (node) {
  if (node === null) return null
  const clonedNode = new TreeNode(node.val)
  clonedNode.left = clone_tree(node.left)
  clonedNode.right = clone_tree(node.right)
  return clonedNode
}

const dfs = function (number, node, rootNode, result) {
  if (node.left === null) {
    node.left = new TreeNode(number)

    const cloned = clone_tree(rootNode)

    result.push(cloned)
    node.left = null
  } else if (node.right === null) {
    node.right = new TreeNode(number)

    const cloned = clone_tree(rootNode)
    result.push(cloned)
    node.right = null
  }
  if (node.left) dfs(number, node.left, rootNode, result)
  if (node.right) dfs(number, node.right, rootNode, result)
}


console.log(`Total trees: ${find_unique_trees(2)}`)
console.log(`Total trees: ${find_unique_trees(3)}`)
