function solution(dartResult) {
    var answer = 0;
    let i = 0, j = 0;
    const powMap = { S: 1, D: 2, T: 3 };
    const array = [];
    
    while (i < dartResult.length) {
        if (dartResult[i] + dartResult[i + 1] === "10") {
            console.log(dartResult[i]);
            array[j] = Math.pow(dartResult[i] + dartResult[i + 1], powMap[dartResult[i + 2]]);
            i += 2;
            j++;
        } else if ("0" <= dartResult[i] && dartResult[i] <= "9") { // 점수 계산
            console.log(dartResult[i]);
            array[j] = Math.pow(dartResult[i], powMap[dartResult[i + 1]]);
            i++;
            j++;
            console.log(array);
        } else if (dartResult[i] === "*") {
            array[j - 1] *= 2;
            if (j - 2 >= 0) {
                array[j - 2] *= 2;
            }
        } else if (dartResult[i] === "#") {
            array[j - 1] *= -1;
        }
        i++;
    }
    
    console.log(array);
    
    for (const amount of array) {
        answer += amount;
    }
    
    return answer;
}