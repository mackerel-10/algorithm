function solution(number, limit, power) {
    var answer = 0;
    let powerResult;
    
    for (let person = 1; person <= number; person++) {
        powerResult = 0;
        for (let divisor = 1; divisor < Math.sqrt(person); divisor++) {
            if (person % divisor === 0) {
                powerResult++;
            }
        }
        powerResult *= 2;
        if (Number.isInteger(Math.sqrt(person))) {
            powerResult++;
        }
        if (powerResult > limit) {
            answer += power;
        } else {
            answer += powerResult;    
        }   
    }
    
    return answer;
}