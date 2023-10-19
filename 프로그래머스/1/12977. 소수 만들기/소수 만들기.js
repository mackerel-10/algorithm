const isPrime = function (n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    const sumList = [];
    
    // 총합 리스트 생성
    const dfs = function (count, sum, numberList) {
        if (count === 3) {
            sumList.push(sum);
            return;
        }

        for (let i = 0; i < numberList.length; i++) {
            dfs(count + 1, sum + numberList[i], numberList.slice(i + 1, numberList.length));
        }
    }
    
    dfs(0, 0, nums);
    // console.log(sumList);
    
    // 총합 소수인지 확인
    let answer = 0;
    for (const value of sumList) {
        if (isPrime(value) === true) {
            answer++;
        }
    }
    return answer;
}