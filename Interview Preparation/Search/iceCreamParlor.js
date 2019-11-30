function whatFlavors(cost, money) {
    const comp = {};

    for (let i = 0; i < cost.length; i++) {
        if (comp[cost[i]] >= 0) {
            console.log(comp[cost[i]] + 1, i + 1);
        }
        comp[money - cost[i]] = i;
    }
}