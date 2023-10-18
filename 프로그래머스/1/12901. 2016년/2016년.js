function solution(a, b) {
    const answerList = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const perDayOfMonth = {'1': 31, '2': 29, '3': 31, '4': 30, '5': 31, '6': 30, '7': 31, '8': 31, '9': 30, '10': 31, '11': 30, '12': 31};
    
    // a월까지의 총 날짜 수를 계산
    let amountDay = b;
    for (let i = 1; i < a; i++) {
        amountDay += perDayOfMonth[i];
    }
    
    // 요일 계산
    return answerList[amountDay % 7];
}