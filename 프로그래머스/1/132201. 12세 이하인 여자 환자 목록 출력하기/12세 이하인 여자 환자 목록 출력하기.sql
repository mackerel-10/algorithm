-- 코드를 입력하세요
# 12세 이하인 여자환자
# 환자이름, 환자번호, 성별코드, 나이, 전화번호 = PT_NAME, PT_NO, GEND_CD, AGE, TLNO
# 전화번호 없으면 NONE
SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE')
FROM PATIENT
WHERE AGE <= 12 AND GEND_CD = 'W'
ORDER BY AGE DESC, PT_NAME ASC; # 나이를 기준으로 내림차순, 나이가 같다면 환자이름을 기준으로 오름차순