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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = recursion

// going down + coming back
// time O(logn + k) for balanced tree, O(n+k) for unbalanced tree
// space: (stack) O(long) for balanced tree, O(n) for unbalanced
function iteration(root, k) {
    let curr = root;
    let n = 0;
    // LIFO stack
    const stack = [];
    // 5,3 2 1

    while(true) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        n += 1;

        if(n === k) {
            return curr.val;
        }

        curr = curr.right;
    }
};


function recursion(root, k) {
    let stack = [];

    function dfs(node) {
        if(!node) {
            return [];
        }

        return [...dfs(node.left), node.val, ...dfs(node.right)];
    }

    return dfs(root)[k-1];
}

//     5
//   3    6
//  2 4
// 1