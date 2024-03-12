function fibs(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibSequence = [0, 1];
        for (let i = 2; i < n; i++) {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
        return fibSequence;
    }
    
}