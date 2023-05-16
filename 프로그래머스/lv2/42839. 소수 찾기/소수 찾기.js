function solution(numbers) {
    let combinations = [];
    
    function iteration(numberList, combination) {
        if (numberList.length > 0) {
            for (let i = 0; i < numberList.length; i++) {
                let newNumberList = [...numberList];
                newNumberList.splice(i, 1);
                iteration(newNumberList, combination + numberList[i]);
            }
        }
        
        if (combination.length > 0) {
            combinations.push(Number(combination));
        }
    }
    
    iteration([...numbers], '')
    
    combinations = [...new Set(combinations)].sort((a, b) => a - b);
    console.log(combinations);
    
    let cnt = combinations.filter((target) => {
        if (target <= 1)
            return false;
    
        let max = Math.floor(Math.sqrt(target));
            for (let i = 2; i <= max; i++) {
                if (target % i === 0) {
                    return false;
                }
            }

            return true;
        }).length;
    
    return cnt;
}