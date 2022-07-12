//Time: O(n) worst case(unbalanced), balanced: best case O(log N)
// space: O(1)

var lowestCommonAncestor = function(root, p, q) {
    let current = root;

    while(current) {
        if(p.val < current.val && q.val < current.val) {
            current = current.left;
        } else if(p.val > current.val && q.val > current.val) {
            current = current.right;
        } else {
            return current;
        }
    }
};

// time: O(n) worst case(unbalanced), balanced: best case O(log N)
// space: O(logn)
function recursion(root, p, q){
    if(root.val === p.val || root.val === q.val) {
        return root;
    }

    if(p.val < root.val && q.val > root.val) {
        return root;
    }

    if(p.val > root.val && q.val < root.val) {
        return root;
    }

    if(p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return lowestCommonAncestor(root.right, p, q);
    }
}