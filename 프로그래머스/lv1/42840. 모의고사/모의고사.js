function solution(answers) {
    let students = [];
    students.push([1, 2, 3, 4, 5]); // 0
    students.push([2, 1, 2, 3, 2, 4, 2, 5]); // 1
    students.push(('3'.repeat(2) + '1'.repeat(2) + '2'.repeat(2) + '4'.repeat(2) + '5'.repeat(2)).split('').map(Number)); // 2
    let correctCnt = [];
    
    for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
        let student = students[studentIndex];
        let patternLength = students[studentIndex].length;
        let cnt = 0;
        
        for (let answerIndex = 0; answerIndex < answers.length; answerIndex++) {
            let restIndex = answerIndex % patternLength;
            if (answers[answerIndex] === student[restIndex]) {
                cnt++;
            }
        }
        correctCnt.push(cnt);
    }    

    const maxCnt = Math.max(...correctCnt);
    
    return correctCnt.reduce((result, cnt, index) => {
        if (cnt === maxCnt) {
            result.push(index + 1);
        }
        
        return result;
    }, []);
}

// n = 1
// 1번 n, n+1, n+2, n+3, n+4
// 2번 (2, 1), (2, 3), (2, 4), (2, 5)
// 3번 (n+2, n+2), (n, n), (n+1, n+1), (n+3, n+3), (n+4, n+4)