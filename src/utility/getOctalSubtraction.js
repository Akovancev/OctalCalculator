import getOctalAdditing from "./getOctalAdditing";

const getOctalSubtraction = (firstValue, secondValue) => {
    let balance = 0;
    let result = '';
    let a = Number(firstValue);
    let b = Number(secondValue);
    if (a < 0) return -getOctalAdditing(-a, b);

    let sign = 1;
    if (a < b) {
        const temp = a;
        a = b;
        b = temp;
        sign = -1;
    }

    while (a || b || balance) {
        const currentResult = a % 10 - b % 10 - balance;
        if (currentResult < 0) {
            balance = 1;
            result = (currentResult + 8) + result;
        }
        else {
            balance = 0;
            result = currentResult + result;
        }
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
    }
    return sign * Number(result);
};

export default getOctalSubtraction;
