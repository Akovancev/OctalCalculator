import React from 'react';
import { Button, ButtonGroup, TextField } from "@mui/material";
import useCalculator from './hooks/useCalculator';

const Calculator = () => {
    const { expressionValue, calculatorButtonsConfig } = useCalculator();
    return (
        <>
            <TextField
                value={expressionValue}
                size="small"
                fullWidth
            />
            {calculatorButtonsConfig.map(stringButtons => (
                <ButtonGroup fullWidth>
                    {stringButtons.map(({ label, onClickFn }) => (
                        <Button
                            variant="contained"
                            onClick={onClickFn}
                        >
                            {label}
                        </Button>
                    ))}
                </ButtonGroup>
            ))}
        </>
    );
};

export default Calculator;
