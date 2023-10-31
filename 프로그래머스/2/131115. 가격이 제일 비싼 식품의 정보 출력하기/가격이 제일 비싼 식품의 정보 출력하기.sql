-- 코드를 입력하세요
# 가장 비씬 식품의 식품 정보

# Sub query
SELECT *
FROM FOOD_PRODUCT
WHERE PRICE =
    (SELECT MAX(PRICE) FROM FOOD_PRODUCT);