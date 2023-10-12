function solution(numbers, target) {
    var answer = 0;
    
    const dfs = function(count, sum) {
        if (count === numbers.length) {
            if (target === sum) {
                answer++;
            }
            return;
        }
        
        dfs(count + 1, sum + numbers[count]); // 왼쪽 노드 탐색
        dfs(count + 1, sum - numbers[count]); // 오른쪽 노드 탐색
    }
    
    dfs(0, 0);
    
    return answer;
}