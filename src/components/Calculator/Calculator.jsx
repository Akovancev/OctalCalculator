import React from 'react';
import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import useCalculator from './hooks/useCalculator';
import { boxStyles } from './styles/styles';
import { linkStyles } from '../../utility/styles/styles';

const Calculator = () => {
    const { expressionValue, calculatorButtonsConfig, handleReset } = useCalculator();
    return (
        <Box sx={boxStyles}>
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
            <Link style={linkStyles} to="/training">
                <Button
                    fullWidth
                    color="error"
                    variant="contained"
                >
                    Go to training
                </Button>
            </Link>
        </Box>
    );
};

export default Calculator;
