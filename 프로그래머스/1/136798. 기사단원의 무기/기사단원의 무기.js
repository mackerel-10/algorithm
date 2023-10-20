function solution(number, limit, power) {
    var answer = 0;
    let powerResult;
    
    for (let person = 1; person <= number; person++) {
        powerResult = 0;
        for (let divisor = 1; divisor <= Math.sqrt(person); divisor++) {
            if (person === Math.pow(divisor, 2)) {
                powerResult++;
            } else if (person % divisor === 0) {
                powerResult += 2;
            }
        }
        
        if (powerResult > limit) {
            answer += power;
        } else {
            answer += powerResult;    
        }   
    }
    
    return answer;
}