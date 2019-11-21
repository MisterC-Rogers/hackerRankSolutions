function getMinimumCost(k, c) {
    c = c.sort((a, b) => a - b);

    let cost = 0;
    for (let i = 0; i != c.length; i++) {
        let j = c.length - 1 - i;
        let multiplier = Math.floor(j / k) + 1;
        cost = cost + c[i] * multiplier;
    }

    return cost;
}
