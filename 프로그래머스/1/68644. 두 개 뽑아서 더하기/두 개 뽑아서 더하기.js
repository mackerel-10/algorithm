function solution(numbers) {
    let answer = [];
    const hashMap = new Map();
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if (hashMap.has(sum) === false) {
                hashMap.set(sum, true);
                answer.push(sum);
            }
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}