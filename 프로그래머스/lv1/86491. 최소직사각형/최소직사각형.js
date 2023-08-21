function solution(sizes) {
    let answer = 0;
    let firstMaxSize = 0;
    let secondMaxSize = 0;
    
    // 첫번쨰 길이를 무조건 두번째 길이보다 큰 값으로 수정
    sizes.forEach(([firstSize, secondSize]) => {
        if (firstSize < secondSize) {
            const temp = firstSize;
            
            firstSize = secondSize;
            secondSize = temp;
        }
        
        if (firstSize > firstMaxSize) {
            firstMaxSize = firstSize;
        }
        
        if (secondSize > secondMaxSize) {
            secondMaxSize = secondSize;
        }
    });
    
    console.log(firstMaxSize, secondMaxSize);
    
    answer = firstMaxSize * secondMaxSize;
    return answer;
}