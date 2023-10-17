function solution(cards1, cards2, goal) {
    let i = 0, j = 0;

    for (const word of goal) {
        if (word === cards1[i]) {
            i++;
        } else if (word === cards2[j]) {
            j++;
        }
    }
    
    // console.log(i, j);
    // (i === cards1.length || j === cards2.length) && 
    if (i + j === goal.length) {
        // 끝까지 탐색했을 경우 i + j가 goal의 단어 수
        return "Yes";
    }
    return "No";
}