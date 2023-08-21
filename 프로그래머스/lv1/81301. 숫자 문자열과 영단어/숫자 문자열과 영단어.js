function solution(s) {
    let answer = '';
    const map = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };
    
    let combinedString = '';
    for (const value of s) {
        if (Number.isInteger(Number(value))) {
            answer += value;
        } else {
            combinedString += value;
            console.log(combinedString);
            
            if (map[combinedString] !== undefined) {
                
                answer += map[combinedString];
                combinedString = '';
            }
        }
        
        // console.log(answer, combinedString);
    }
    
    return Number(answer);
}