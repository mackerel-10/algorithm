function solution(n, lost, reserve) {
    let maxStudentWithGymCloth = n - lost.length; // 현재 체육복을 소지하고 있는 학생

    lost.sort((student1, student2) => student1 - student2);
    reserve.sort((reserve1, reserve2) => reserve1 - reserve2);
    
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                lost[i] = -1;
                reserve[j] = -1;
                maxStudentWithGymCloth++;
                break;
            }
        }
    }
    
    // console.log(lost, reserve);
    
    for (const lostStudent of lost) {
        if (lostStudent === -1) continue;
        for (let i = 0; i < reserve.length; i++) {
            if (lostStudent === reserve[i] - 1 ||
               lostStudent === reserve[i] + 1) {
                maxStudentWithGymCloth++;
                reserve[i] = -1;
                break;
            }
        }
    }
    
    return maxStudentWithGymCloth;
}