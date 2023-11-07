function solution(citations) {
    citations.sort((citation1, citation2) => citation2 - citation1);
    console.log(citations);
    
    // 인용수가 논문수보다 작아지는 시점
    // citations[index]: 인용수, index: 논문수(1 ~ n)
    for (let index = 1; index <= citations.length; index++) {
        console.log(citations[index - 1], index);
        if (citations[index - 1] < index) {
            return index - 1;
        }
    }
    
    return citations.length;
}