function solution(strings, n) {
    strings.sort((stringA, stringB) => {
        let result;
        stringA[n] > stringB[n] ? result = 1 : result = -1;
        if (stringA[n] === stringB[n]) {
            stringA > stringB ? result = 1: result = -1;
        }
        
        return result;
    });
    
    return strings;
}