function solution(numbers) {
    var answer = '';
    
    answer = numbers.sort((num1, num2) => (String(num2) + String(num1)) - (String(num1) + String(num2)))
        .join("");
    
    // console.log(numbers, answer);
    
    return answer[0] === "0" ? "0" : answer;
}