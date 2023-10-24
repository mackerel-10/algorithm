function solution(n, m, section) {
//     const paintedSection = {};
//     let countPainting = 0;
    
//     for (const sectionNumber of section) {
//         if (!paintedSection[sectionNumber]) {
//             countPainting++;
//             for (let i = 0; i < m; i++) {
//                 paintedSection[sectionNumber + i] = true;
//             }
//         }
//     }
//    return countPainting;
    
    var answer = 0;
    var painted = 0;
    for (var sectionNumber of section) {
        if (painted < sectionNumber) {
            answer++;
            painted = sectionNumber + m - 1; // 현재 칠해져 있는 마지막 섹션 값
        }
    }
    
    return answer;
}