function solution(k, m, score) {
    var answer = 0;
    
    // 오름차순으로 정렬
    score.sort((apple1, apple2) => apple1 - apple2);
    
    // 가장 낮은 점수 * m(사과의 개수) = 한 상자의 가격
    // score.length / m한 만큼 반복 => 상자 개수만큼 반복
    for (let i = 1; i <= Math.floor(score.length / m); i++) {
        let boxScore = score[score.length - (m * i)] * m;
        answer += boxScore;
        // console.log(score.length - (m * i), boxScore);
    }
    
    return answer;
}