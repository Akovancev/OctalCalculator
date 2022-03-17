import React from 'react';
import { Button, ButtonGroup, TextField } from "@mui/material";
import useCalculator from './hooks/useCalculator';

const Calculator = () => {
    const { expressionValue, calculatorButtonsConfig, handleReset } = useCalculator();
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
                            color="error"
                            variant="contained"
                            onClick={onClickFn}
                        >
                            {label}
                        </Button>
                    ))}
                </ButtonGroup>
            ))}
            <Button
                fullWidth
                color="error"
                onClick={handleReset}
            >
                Reset
            </Button>
        </>
    );
};

export default Calculator;
