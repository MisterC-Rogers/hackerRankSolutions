function luckBalance(k, contests) {
    // Lose all unimportant
    let L = contests.filter(c => !c[1]).reduce((s, c) => s + c[0], 0);

    // Important, decensing by luck
    const a = contests.filter(c => c[1]).sort((a, b) => b[0] - a[0]);

    k = Math.min(k, a.length);

    // Lose at most k important
    L += a.slice(0, k).reduce((s, c) => s + c[0], 0);

    // Win rest of important
    L -= a.slice(k).reduce((s, c) => s + c[0], 0);

    return L;
}
