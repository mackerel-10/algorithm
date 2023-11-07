function solution(n, lost, reserve) {
    let maxStudentWithGymCloth = n - lost.length; // 현재 체육복을 소지하고 있는 학생
    let index1 = 0, index2 = 0;

    lost.sort((student1, student2) => student1 - student2);
    reserve.sort((reserve1, reserve2) => reserve1 - reserve2);
    
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                lost[i] = 0;
                reserve[j] = 0;
                maxStudentWithGymCloth++;
            }
        }
    }
    
    // lost를 순회하며 reserve한 학생들 중 빌릴 수 있는 학생 탐색
    while (index1 < lost.length && index2 < reserve.length) {
        if (lost[index1] === 0) {
            index1++;
            continue;
        } else if (reserve[index2] === 0) {
            index2++;
            continue;
        }
        
        if (lost[index1] === reserve[index2] - 1 ||
            lost[index1] === reserve[index2] + 1) { // 앞, 뒷자리 번호가 잃어버린 학생의 번호와 같은지 확인
            maxStudentWithGymCloth++; // 해당되는 학생 수가 있으면 최대 학생 수 증가
            index1++;
            index2++;
        } else if (lost[index1] < reserve[index2] - 1) {
            index1++;
        } else {
            index2++;
        }
    }
    
    return maxStudentWithGymCloth;
}