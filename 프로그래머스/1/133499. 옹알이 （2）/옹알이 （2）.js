function solution(babbling) {
    let answer = 0;
    let wordList = {"aya": true, "ye": true, "woo": true, "ma": true};
    
    for (const word of babbling) {
        let temp = '';
        let correctLength = 0;
        let history = [];
        
        for (let index = 0; index < word.length; index++) {
            temp += word[index]; // 한글자씩 temp에 추가
            
            if (wordList[temp] === true && history[history.length - 1] !== temp) {
                correctLength += temp.length;
                history.push(temp);
                temp = ''; // temp 초기화
            }
        }
        
        if (correctLength === word.length) {
            // console.log('word', word);
            answer++;
        }
    }
    
    return answer;
}