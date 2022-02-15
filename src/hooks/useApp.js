import { useState } from 'react';
import getOctalAdditing from '../utility/getOctalAdditing';
import getOctalSubtraction from '../utility/getOctalSubtraction';

const useApp = () => {
    const [expressionValue, setExpressionValue] = useState('');

    const handleChange = digit => {
        setExpressionValue(prevState => prevState + digit)
    };

    const handleReset = () => setExpressionValue('');

    const handleFinish = () => {
        let result = 0;
        let currentDigit = '';
        let currentOperation = '+';

        const getOperation = (nextOperation) => {
            const currentResult = currentOperation === '+' 
                ? getOctalAdditing(result, currentDigit)
                : getOctalSubtraction(result, currentDigit);
            currentOperation = nextOperation;
            currentDigit = '';
            return currentResult;
        }

        [...expressionValue].map(value => {
            if (value === ' ') return value;

            if (!isNaN(value)) {
                currentDigit += value;
                return value;
            }

            result = getOperation(value);
            return value;
        });
        result = getOperation();
        setExpressionValue(result);
    };

    const calculatorButtonsConfig = [
        [
            {
                label: '1',
                onClickFn: () => handleChange('1'),
            },
            {
                label: '2',
                onClickFn: () => handleChange('2'),
            },
            {
                label: '3',
                onClickFn: () => handleChange('3'),
            },
            {
                label: '-',
                onClickFn: () => handleChange(' - '),
            },
        ],
        [
            {
                label: '4',
                onClickFn: () => handleChange('4'),
            },
            {
                label: '5',
                onClickFn: () => handleChange('5'),
            },
            {
                label: '6',
                onClickFn: () => handleChange('6'),
            },
            {
                label: '+',
                onClickFn: () => handleChange(' + '),
            },
        ],
        [
            {
                label: '7',
                onClickFn: () => handleChange('7'),
            },
            {
                label: '0',
                onClickFn: () => handleChange('0'),
            },
            {
                label: ' ',
                onClickFn: () => { },
            },
            {
                label: '=',
                onClickFn: handleFinish,
            },
        ]
    ];

    return {
        calculatorButtonsConfig,
        expressionValue,
        handleReset,
        handleFinish,
    };
};

export default useApp;