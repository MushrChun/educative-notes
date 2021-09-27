class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};



const find_maximum_path_sum = function (root) {

  let max = Number.NEGATIVE_INFINITY

  const dfs = function (node) {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)
    const sum = Math.max(left, 0) + Math.max(right, 0) + node.value

    max = Math.max(sum, max)

    return Math.max(left, right) + node.value
  }

  dfs(root)

  return max;
};


var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root = new TreeNode(-1)
root.left = new TreeNode(-3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
