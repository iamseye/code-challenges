var combinationSum = function(candidates, target) {

    let result = [];

    function dfs(i, cur, total) {
        if(total === target) {
            result.push([...cur]);
            return;
        }

        if(i >= candidates.length || total > target) {
            return;
        }

        cur.push(candidates[i]);

        // include the candidate [2,2]
        dfs(i, cur, total+candidates[i]);

        // not include the candiate
        cur.pop();
        dfs(i+1, cur, total);
    }

    dfs(0, [], 0);

    return result;
};