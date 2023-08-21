function solution(food) {
    let answer = '';
    
    for (let index = 1; index < food.length; index++) {
        let foodAmount = food[index];
        let repeatAmount = foodAmount / 2;
        
        answer += String(index).repeat(repeatAmount);
        
        // console.log(answer); 
    }
    
    const reversedOrder = [...answer].reverse().join('');
    // console.log(reversedOrder);
    
    answer += '0' + reversedOrder;
    return answer;
}