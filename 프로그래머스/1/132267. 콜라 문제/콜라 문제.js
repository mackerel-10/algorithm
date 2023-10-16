function solution(a, b, n) {
    var answer = 0;
    
    // 빈병 교환 기준: a, 새 콜라: b, 상빈이의 빈병: n
    // 보유 중인 빈 병이 a개 미만이면 추가적으로 빈병 x
    
    while (n >= a) {
        let newCoke = Math.floor(n / a) * b;
        n = newCoke + (n % a);
        answer += newCoke;
        // console.log(n);
    }
    
    return answer;
}