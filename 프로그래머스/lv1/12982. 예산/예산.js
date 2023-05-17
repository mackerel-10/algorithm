function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let cnt = 0;
    while (budget > 0) {
        budget -= d[0];
        d.shift();
        if (budget >= 0) {
            cnt++;
        }
    }
    
    return cnt;
}