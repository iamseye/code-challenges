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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// time: O(mn) m and n are number of nodes in given two trees.
// space: O(n)
var isSubtree = function(root, subRoot) {
    if(!subRoot) {
        return true;
    }

    if(!root) {
        return false;
    }

    if(isSameTree(root,subRoot)){
        return true;
    }

    const left = isSubtree(root.left, subRoot);
    const right = isSubtree(root.right, subRoot);

    return left || right;

};

function isSameTree(p, q) {
    if(p === null && q === null) {
        return true;
    }

    if(p === null || q === null) {
        return false;
    }


    if(p.val !== q.val) {
        return false;
    }

    const left = isSameTree(p.left, q.left);
    const right =  isSameTree(p.right, q.right);

    return left && right
}

