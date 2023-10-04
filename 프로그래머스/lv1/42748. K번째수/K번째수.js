function solution(array, commands) {
    var answer = [];
    
    
    for (let command of commands) {
        let i = command[0], j = command[1], k = command[2];
        let slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
        
        answer.push(slicedArray[k - 1]);
    }
    
    return answer;
}