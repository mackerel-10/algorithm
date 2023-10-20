function solution(n) {
    const numberMap = {};
    let count = n - 1;
    
    for (let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
        if (numberMap[divisor]) continue;
        for (let i = divisor * 2; i <= n; i += divisor) {
            if (!numberMap[i]) {
                numberMap[i] = true;
                count--;
            }
        }
    }
    
    return count;
}