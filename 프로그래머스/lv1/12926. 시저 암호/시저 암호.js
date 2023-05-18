function solution(s, n) {
    let answer = '';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = lowerCase.toUpperCase();
    let index, charCase;
    
    for (const char of s) {
        if (char === ' ') {
            answer += char;
            continue;
        }
        
        lowerCase.includes(char) === true
            ? charCase = lowerCase
            : charCase = upperCase;
        index = charCase.indexOf(char)
        answer += charCase[(index + n) % 26]
    }
    
    return answer;
}