function solution(s, n) {
    let answer = '';
    let newChar;
    let min, max;
    
    for (const index in s) {
        if (s[index] !== ' ') {
            let asciiNumber = s.charCodeAt(index);
            
            if (asciiNumber >= 97 && asciiNumber <= 122) {
                [min, max] = [97, 122];
            } else {
                [min, max] = [65, 90];          
            }
            asciiNumber + n > max
                ? newChar = (asciiNumber + n - 26)
                : newChar = asciiNumber + n;
            answer += String.fromCharCode(newChar);
        } else {
            answer += ' ';
        }
    }
    
    return answer;
}