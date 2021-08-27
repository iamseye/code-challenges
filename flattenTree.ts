/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(readonly val: number | undefined, readonly left: TreeNode | undefined | null, readonly right: TreeNode | undefined | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}


const flatten = (root:TreeNode | null): void => {

  flattenRecursive(root);

  console.log(JSON.stringify(root));
};

const flattenRecursive = (root:TreeNode | null | undefined)  => {
  if (!root) {
    return;
  }

  flattenRecursive(root.left);

  flattenRecursive(root.right);
};

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, undefined, undefined), new TreeNode(4, undefined, undefined)),
  new TreeNode(5, undefined, new TreeNode(6, undefined, undefined))
)

// [1,2,5,3,4,null,6]


// 3
//flatten(root); // [1,null,2,null,3,null,4,null,5,null,6]
