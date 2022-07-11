/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// time / space : O(n)
// use the height of the tree
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }

    const subLevel = Math.max(maxDepth(root.left), maxDepth(root.right));

    return 1 + subLevel;
};

// BFS method