-- 코드를 입력하세요
# ID, 저자명, 출판일, CATEGORY=경제
# 결과는 출판일을 기준으로 ASC
SELECT BOOK_ID, a.AUTHOR_NAME, DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
FROM BOOK as b
JOIN AUTHOR as a ON b.AUTHOR_ID = a.AUTHOR_ID
WHERE CATEGORY = '경제'
ORDER BY PUBLISHED_DATE ASC;