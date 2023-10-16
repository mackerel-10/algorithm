/*
* name: 그리워하는 사람의 이름을 담은 문자열 배열
* yearning: 그리움 점수
* photo: 각 사진에 찍힌 인물의 이름이 담긴 이차원 문자열 배열
* photo에 주어진 순서대로 배열에 담아 반환
*/

function solution(name, yearning, photo) {
    var answer = [];
    const score = {};
    
    for (let i in name) {
        score[name[i]] = yearning[i];
    }
    
    // Brute Force
    for (let i = 0; i < photo.length; i++) {
        let amount = 0;
        for (let j = 0; j < photo[i].length; j++) {
            let personScore = score[photo[i][j]];
            
            if (personScore) {
                amount += personScore;
                // console.log(personScore);
            }            
        }
        answer.push(amount);
    }
    
    return answer;
}