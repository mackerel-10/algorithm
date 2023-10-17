function solution(k, score) {
    var answer = [];
    const hallOfFame = [];
    
    for (let perScore of score) {
        if (hallOfFame.length < k) { // 명예의 전당에 k길이만큼 추가
            hallOfFame.push(perScore);
        } else if (hallOfFame.length === k && perScore >= hallOfFame[0]) {
            // 명예의 전당 값 수정
            hallOfFame[0] = perScore;
        }
        
        hallOfFame.sort((score1, score2) => score1 - score2);
        // console.log(hallOfFame);
        answer.push(hallOfFame[0]);
    }
    
    return answer;
}