function solution(s) {
    var answer = [];
    const hashMap = new Map();
    
    for (const index in s) {
        if (hashMap.has(s[index])) {
            answer.push(index - hashMap.get(s[index]));
        } else {
            answer.push(-1);
        }
        hashMap.set(s[index], index);
    }
    
    return answer;
}