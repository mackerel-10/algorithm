function solution(a, b) {
    const answerList = {'0': 'THU', '1': 'FRI', '2': 'SAT', '3': 'SUN', '4': 'MON', '5': 'TUE', '6': 'WED'};
    const perDayOfMonth = {'1': 31, '2': 29, '3': 31, '4': 30, '5': 31, '6': 30, '7': 31, '8': 31, '9': 30, '10': 31, '11': 30, '12': 31};
    
    // a월까지의 총 날짜 수를 계산
    let amountDay = 0;
    for (let i = 1; i < a; i++) {
        amountDay += perDayOfMonth[i];
    }
    
    // a월까지의 총 날짜수에 b일 만큼을 더한 후 7로 나눈 나머지
    amountDay += b;    
    // console.log(amountDay);
    
    // 요일 계산
    return answerList[amountDay % 7];
}