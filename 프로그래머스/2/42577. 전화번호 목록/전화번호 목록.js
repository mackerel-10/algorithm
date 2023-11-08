function solution(phone_book) {
    // 전화번호 길이를 오름차순으로 정렬
    phone_book.sort();
    // console.log(phone_book);
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        let prefix = phone_book[i + 1].slice(0, phone_book[i].length);
    
        if (phone_book[i] === prefix) return false;
    }
    
    return true;
}