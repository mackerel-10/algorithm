function solution(dartResult) {
    const powMap = { S: 1, D: 2, T: 3 };
    const array = [];
    let answer = 0;
    let i = 0, j = 0;
    
    while (i < dartResult.length) {
        if (dartResult[i] + dartResult[i + 1] === "10") { // 10
            array[j++] = Math.pow(dartResult[i] + dartResult[i + 1],
                                powMap[dartResult[i + 2]]);
            i += 3;
        } else if ("0" <= dartResult[i] && dartResult[i] <= "9") { // 0 ~ 9
            array[j++] = Math.pow(dartResult[i], powMap[dartResult[i + 1]]);
            i += 2;
        } else if (dartResult[i] === "*") {
            array[j - 1] *= 2; // 현재 점수 * 2
            if (array[j - 2] !== undefined) { // 점수가 2개 이상 존재할 때
                array[j - 2] *= 2;
            }
            i++;
        } else if (dartResult[i] === "#") {
            array[j - 1] *= -1;
            i++;
        }
    }
    
    for (const amount of array) {
        answer += amount;
    }
    
    return answer;
}