function compoundInterest(amount, interest, years) {
    for (i=0; i < years; i++) {
        amount += amount*interest;
    }
    return amount.toFixed(2);
}
compoundInterest(100, (.03), 5);
