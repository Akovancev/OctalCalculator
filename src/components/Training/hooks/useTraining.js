import { useState } from "react";
import getOctalAdditing from "../../../utility/getOctalAdditing";
import getOctalSubtraction from "../../../utility/getOctalSubtraction";
import { demicalToOctal, octalToDemical } from "../../../utility/transitions";

const useTraining = () => {
    const [errorCheck, setErrorCheck] = useState();
    
    const [result, setResult] = useState();
    const handleChangeResult = ({ target }) => setResult(target.value);

    const [rangeFrom, setRangeFrom] = useState();
    const [rangeTo, setRangeTo] = useState();
    const handleChangeRangeFrom = ({ target }) => setRangeFrom(target.value);
    const handleChangeRangeTo = ({ target }) => setRangeTo(target.value);

    const [plus, setPlus] = useState(true);
    const [minus, setMinus] = useState(false);
    const handleChangePlus = ({ target }) => setPlus(target.checked);
    const handleChangeMinus = ({ target }) => setMinus(target.checked);

    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState();
    const [operation, setOperation] = useState();

    const [errorMessage, setErrorMessage] = useState();
    const validate = () => {
        if (!plus && !minus) {
            setErrorMessage('Необходимо выбрать хотя бы 1 операцию');
            return false;
        }

        if (isNaN(rangeFrom)) {
            setErrorMessage('Начальное значени диапазона не является числом');
            return false;
        }
        if (isNaN(rangeTo)) {
            setErrorMessage('Конечное значени диапазона не является числом');
            return false;
        }

        if ([...rangeFrom].find(value => value > 7)) {
            setErrorMessage('Начальное значени диапазона не является числом восьмиричной системы счисления');
            return false;
        }
        if ([...rangeTo].find(value => value > 7)) {
            setErrorMessage('Конечное значени диапазона не является числом восьмиричной системы счисления');
            return false;
        }

        if (Number(rangeFrom) > Number(rangeTo)){
            setErrorMessage('Начальное значение диапазона больше конечного');
            return false;
        }

        setErrorMessage();
        return true;
    }

    const generateDigit = () => getOctalAdditing(
        demicalToOctal(
            Math.floor(Math.random() * (octalToDemical(rangeTo) - octalToDemical(rangeFrom) + 1))
        ), 
        Number(rangeFrom)
    )

    const handleFinish = () => {
        setErrorCheck();
        setResult('');
        const notError = validate();

        if (notError) {
            setFirstValue(generateDigit());
            setSecondValue(generateDigit());
            if (plus && !minus) setOperation(' + ');
            else if (!plus && minus) setOperation(' - ');
            else setOperation(Math.floor(Math.random() * 2) === 0 ? ' + ' : ' - ');
        }
    };

    const handleCheckResult = () => {
        let expectedResult;
        if (operation.includes('+')) expectedResult = getOctalAdditing(firstValue, secondValue);
        if (operation.includes('-')) expectedResult = getOctalSubtraction(firstValue, secondValue);
        setErrorCheck(expectedResult !== Number(result) ? 'Ошибка' : 'Правильно')
    };

    return {
        rangeFrom,
        rangeTo,
        handleChangeRangeFrom,
        handleChangeRangeTo,

        plus,
        minus,
        handleChangePlus,
        handleChangeMinus,

        firstValue,
        secondValue,
        operation,
        handleFinish,

        result,
        errorMessage,
        errorCheck,
        handleChangeResult,
        handleCheckResult,
    }
};

export default useTraining;
