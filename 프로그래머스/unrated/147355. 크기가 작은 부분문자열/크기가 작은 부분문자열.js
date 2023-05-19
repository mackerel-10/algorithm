function solution(t, p) {
    let combinations = [];
    
    for (let i = 0; i < t.length - (p.length - 1); i++) {
        let combination = t.substring(i, p.length + i);
        console.log(combination);
        
        if (Number(combination) <= Number(p) && combination.length === p.length) {
            combinations.push(combination);
        }   
    }
    
    return [...combinations].length;
}