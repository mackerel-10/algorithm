function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let cnt = 0;
    for (const i in d) {
        budget -= d[i];
        if (budget >= 0) {
            cnt++;
        } else {
            break;
        }
    }
    
    return cnt;
}