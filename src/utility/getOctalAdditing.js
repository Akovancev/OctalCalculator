import getOctalSubtraction from "./getOctalSubtraction";

const getOctalAdditing = (firstValue, secondValue) => {
    let balance = 0;
    let result = '';
    let a = Number(firstValue);
    let b = Number(secondValue);
    console.log(a, b);
    if (a < 0) return getOctalSubtraction(b, -a);
    while (a || b || balance) {
        const currentResult = a % 10 + b % 10 + balance;
        if (currentResult > 7) {
            balance = 1;
            result = (currentResult - 8) + result;
        }
        else {
            balance = 0;
            result = currentResult + result;
        }
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
    }
    return Number(result);
};

export default getOctalAdditing;
