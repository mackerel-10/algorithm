function solution(n) {
    const numberMap = new Map();
    let count = n - 1;
    
    for (let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
        if (numberMap.has(divisor)) continue;
        for (let i = divisor * 2; i <= n; i += divisor) {
            if (numberMap.has(i) === false) {
                numberMap.set(i, true);
                count--;
            }
        }
    }
    
    return count;
}