function solution(nums) {
    const numsMap = new Map();
    const ponkemonTotal = Math.floor(nums.length / 2);
    
    // 폰켓몬 종류가 몇개인지 Hashmap을 사용하여 탐색
    for (const number of nums) {
        if (!numsMap.has(number)) {
            numsMap.set(number, true);
        }
    }
    
    // 조건에 따라 맞는 값 반환
    if (ponkemonTotal > numsMap.size) {
        return numsMap.size;
    } else {
        return ponkemonTotal;
    }
}