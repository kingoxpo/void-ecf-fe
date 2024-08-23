function recommendProducts(purchaseHistory, targetCustomerId) {
    const purchasedByTarget = new Set();
    const coPurchaseMap = {};

    // 고객의 구매 목록을 분석
    for (const record of purchaseHistory) {
        const { customerId, products } = record;
        
        // 타겟 고객의 구매 목록을 저장
        if (customerId === targetCustomerId) {
            for (const product of products) {
                purchasedByTarget.add(product);
            }
        } else {
            // 다른 고객들의 구매 목록을 기반으로 관련성 계산
            for (const product of products) {
                if (!purchasedByTarget.has(product)) {
                    if (!coPurchaseMap[product]) {
                        coPurchaseMap[product] = 0;
                    }
                    coPurchaseMap[product]++;
                }
            }
        }
    }

    // 관련성 점수에 따라 상품을 정렬
    const recommendedProducts = Object.keys(coPurchaseMap)
        .sort((a, b) => coPurchaseMap[b] - coPurchaseMap[a])
        .slice(0, 3);

    return recommendedProducts;
}

// 예시 실행
const purchaseHistory = [
    { customerId: 1, products: ['A', 'B', 'C'] },
    { customerId: 2, products: ['A', 'D'] },
    { customerId: 1, products: ['C', 'E'] },
    { customerId: 3, products: ['B', 'F'] },
    { customerId: 2, products: ['C', 'E'] },
    { customerId: 3, products: ['A', 'B', 'D'] }
];

console.log(recommendProducts(purchaseHistory, 1)); 
// 출력: ['D', 'F']
