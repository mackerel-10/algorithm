function solution(s) {
    let splitWords = s.split(' ');
        
    for (let i in splitWords) {
        let temp = '';
        let word = splitWords[i];
        for (const j in word) {
            if (j % 2 === 0) {
                temp += word[j].toUpperCase();
            } else {
                temp += word[j].toLowerCase();    
            }
        }
        splitWords[i] = temp;
    }
    
    return splitWords.join(' ');
}