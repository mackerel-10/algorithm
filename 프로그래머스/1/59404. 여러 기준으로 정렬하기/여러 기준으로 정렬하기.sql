-- 코드를 입력하세요
# 모든 동물의 아이디와 이름, 보호 시작일을 이름 순으로 조회
# ANIMAL_ID, NAME, DATETIME
# 이름이 같을 경우 보호를 나중에 시작한 동물을 먼저 보여줘야만 함
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC;
