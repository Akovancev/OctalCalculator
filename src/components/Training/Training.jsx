import React from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { boxStyles, buttonStyles, textFieldStyles, typographyStyles } from './styles/styles';
import useTraining from './hooks/useTraining';
import { linkStyles } from '../../utility/styles/styles';

const Training = () => {
    const {
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
    } = useTraining();

    return (
        <Box style={boxStyles}>
            <Typography {...typographyStyles}>Select number range</Typography>
            <div>
                <TextField
                    value={rangeFrom}
                    onChange={handleChangeRangeFrom}
                    label="from"
                    {...textFieldStyles}
                />
                <TextField
                    value={rangeTo}
                    onChange={handleChangeRangeTo}
                    label="to"
                    {...textFieldStyles}
                />
            </div>
            <Typography {...typographyStyles}>Select operations</Typography>
            <div>
                <FormControlLabel control={<Checkbox checked={plus} onChange={handleChangePlus} />} label="+" />
                <FormControlLabel control={<Checkbox checked={minus} onChange={handleChangeMinus} />} label="-" />
            </div>
            <Button
                fullWidth
                onClick={handleFinish}
                style={buttonStyles}
            >
                Start training
            </Button>
            {firstValue && !errorMessage && (
                <>
                    <Typography {...typographyStyles}>{firstValue + operation + secondValue + ' = ?'}</Typography>
                    <TextField
                        value={result}
                        onChange={handleChangeResult}
                        {...textFieldStyles}
                        helperText={errorCheck}
                        error={errorCheck === 'Error'}
                    />
                    <Button
                        fullWidth
                        onClick={handleCheckResult}
                    >
                        Check Result
                    </Button>
                </>
            )}
            {errorMessage && <Typography {...typographyStyles} color="error">{errorMessage}</Typography>}
            <Link style={linkStyles} to="/">
                <Button
                    fullWidth
                    color="error"
                    variant="contained"
                >
                    Go back
                </Button>
            </Link>
        </Box>
    );
};

export default Training;
