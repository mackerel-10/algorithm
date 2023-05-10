function solution(progresses, speeds) {
    const answer = [];
    let cnt;
    
    while (progresses.length > 0 && speeds.length > 0) {
        while (progresses[0] < 100) {
            progresses = progresses.map((progress, idx) => progress += speeds[idx]);
        }
        
        cnt = 0;
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            cnt++;
        }
        answer.push(cnt);
    }
    
    return answer;
}