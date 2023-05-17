function solution(participant, completion) {
    participant.sort((playerA, playerB) => playerA > playerB ? 1 : -1);
    completion.sort((playerA, playerB) => playerA > playerB ? 1 : -1);
    console.log(participant, completion)
    
    let answer = [];
    while (participant.length > 0 || completion.length > 0) {
        let indexA = participant.length - 1;
        let indexB = completion.length - 1;
        if (participant[indexA] === completion[indexB]) {
            participant.pop();
            completion.pop();
        } else {
            let remove;
            indexA > indexB ? remove = participant : remove = completion;
            answer.push(remove.pop());
        }
    }
    
    return answer.join(" ");
}