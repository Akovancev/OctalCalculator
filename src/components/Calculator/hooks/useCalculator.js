import { useState } from 'react';
import getOctalAdditing from '../../../utility/getOctalAdditing';
import getOctalSubtraction from '../../../utility/getOctalSubtraction';

const useCalculator = () => {
    const [expressionValue, setExpressionValue] = useState('');
    const [firstValue, setFirstValue] = useState();
    const [operation, setOperation] = useState();

    const handleChangeValue = digit => {
        if (isNaN(expressionValue)) setExpressionValue(digit)
        else setExpressionValue(prevState => prevState + digit)
    };

    const handleClickOperation = currOperation => {
        if (firstValue) {
            setExpressionValue(operation.includes('+') 
                ? getOctalAdditing(firstValue, Number(expressionValue)) 
                : getOctalSubtraction(firstValue, Number(expressionValue)));
            setOperation();
            setFirstValue();
            if (!currOperation.includes('=')) {
                setFirstValue(Number(expressionValue));
                setOperation(currOperation);
                setExpressionValue(currOperation)
            }
        }
        else {
            setFirstValue(Number(expressionValue));
            setOperation(currOperation);
            setExpressionValue(currOperation);
        }
    }

    const handleReset = () => setExpressionValue('');

    const calculatorButtonsConfig = [
        [
            {
                label: '1',
                onClickFn: () => handleChangeValue('1'),
            },
            {
                label: '2',
                onClickFn: () => handleChangeValue('2'),
            },
            {
                label: '3',
                onClickFn: () => handleChangeValue('3'),
            },
            {
                label: '-',
                onClickFn: () => handleClickOperation(' - '),
            },
        ],
        [
            {
                label: '4',
                onClickFn: () => handleChangeValue('4'),
            },
            {
                label: '5',
                onClickFn: () => handleChangeValue('5'),
            },
            {
                label: '6',
                onClickFn: () => handleChangeValue('6'),
            },
            {
                label: '+',
                onClickFn: () => handleClickOperation(' + '),
            },
        ],
        [
            {
                label: '7',
                onClickFn: () => handleChangeValue('7'),
            },
            {
                label: '0',
                onClickFn: () => handleChangeValue('0'),
            },
            {
                label: ' ',
                onClickFn: () => { },
            },
            {
                label: '=',
                onClickFn: () => handleClickOperation('='),
            },
        ]
    ];

    return {
        calculatorButtonsConfig,
        expressionValue,
        handleReset,
    };
};

export default useCalculator;