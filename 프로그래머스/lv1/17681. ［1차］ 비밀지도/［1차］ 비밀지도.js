function toBinary(n, value) {
    const binary = value.toString(2);
    
    return "0".repeat(n - binary.length) + binary;
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1 = arr1.map((value) => toBinary(n, value));
    arr2 = arr2.map((value) => toBinary(n, value));
    
    let i = 0, j = 0;
    answer[i] = '';
    while (i < n) {
        if (arr1[i][j] === "1" || arr2[i][j] === "1") {
            answer[i] += "#";
        } else {
            answer[i] += " ";
        }
        j++;
        
        if (j === n && i + 1 < n) {
            i++;
            j = 0;
            answer[i] = '';
        } else if (j === n) {
            i++;
        }
    }
    
    return answer;
}