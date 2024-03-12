function fibsRec(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibSequence = fibsRec(n - 1);
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
        return fibSequence;
    }
}
console.log(fibsRec(8));