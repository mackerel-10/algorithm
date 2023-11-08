// function solution(phone_book) {
//     // 전화번호 길이를 오름차순으로 정렬
//     phone_book.sort((phoneNum1, phoneNum2) => phoneNum1.length - phoneNum2.length);
//     let i = 0; j = i + 1;
    
//     while (i < phone_book.length - 1) {
//         if (phone_book[i][0] === phone_book[j][0]) {
//             const prefix = phone_book[j].slice(0, phone_book[i].length);
//             // console.log(prefix);
//             if (phone_book[i] === prefix) return false;
//         }
//         j++;
        
//         if (j === phone_book.length) {
//             i++;
//             j = i + 1;
//         }
//     }
    
//     return true;
// }

function solution(phone_book) {
    let answer = true;
    let arr = [...phone_book];

    arr = arr.sort();

    for(let i = 0; i < arr.length - 1; i++) {
        let nextString = arr[i+1].substr(0, arr[i].length);
        if (arr[i] === nextString){
            return false;
        }
    }

    return answer;
}