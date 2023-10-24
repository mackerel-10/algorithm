function solution(n, m, section) {
    const paintedSection = {};
    let countPainting = 0;
    
    for (const sectionNumber of section) {
        if (!paintedSection[sectionNumber]) {
            countPainting++;
            for (let i = 0; i < m; i++) {
                paintedSection[sectionNumber + i] = true;
            }
        }
    }
    
    return countPainting;
}