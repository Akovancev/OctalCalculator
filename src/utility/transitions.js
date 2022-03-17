export const octalToDemical = value => parseInt(value, 8);

export const StrReverse = s => s.split("").reverse().join("");

export const demicalToOctal = value => {
    let result = '';
    while (value > 0) {
        result += value % 8;
        value = Math.floor(value / 8);
    }
    return StrReverse(result);
};