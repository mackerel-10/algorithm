-- 코드를 입력하세요
SELECT COUNT(*) AS USERS
FROM USER_INFO
WHERE '20' <= AGE AND AGE <= '29'
    AND JOINED LIKE '2021%';