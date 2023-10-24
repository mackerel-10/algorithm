function solution(N, stages) {
    let answer;
    let userNumber = stages.length;
    let stageInfo = [];
    
    for (const stage of stages) { // 스테이지별 클리어하지 못한 사용자 집계
        if (!stageInfo[stage - 1] && stage <= N) {
            stageInfo[stage - 1] = { stage, count: 1 };
        } else if (stageInfo[stage - 1]) {
            stageInfo[stage - 1].count++;
        }
    } 
    
    for (let i = 0; i < N; i++) {
        if (stageInfo[i]) {
            stageInfo[i].probability = stageInfo[i].count / userNumber;
            userNumber -= stageInfo[i].count;
        } else {
            stageInfo[i] = { stage: i + 1, probability: 0 };
        }
    }
    
    // console.log(stageInfo);
    
    stageInfo = stageInfo.sort((stage1, stage2) => { // 실패율이 높은것부터 정렬
        if (stage1.probability > stage2.probability) { // probability가 큰게 앞으로 와야함
            return -1;
        } else {
            return 1;
        }
    });
    
    answer = stageInfo.map((stage) => stage.stage);
    // console.log(stageInfo, answer);
    
    return answer;
}