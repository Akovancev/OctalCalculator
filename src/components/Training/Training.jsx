import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import useTraining from './hooks/useTraining';

const typographyStyles = {
    mt: 4,
    mb: 1,
    textAlign: 'center',
    variant: 'body2',
};

const textFieldStyles = {
    size: 'small',
    style: { width: 90, marginBottom: 10 },
};

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
        <>
            <Typography {...typographyStyles}>Укажите диапазон чисел</Typography>
            <TextField
                value={rangeFrom}
                onChange={handleChangeRangeFrom}
                label="от"
                {...textFieldStyles}
            />
            <TextField
                value={rangeTo}
                onChange={handleChangeRangeTo}
                label="до"
                {...textFieldStyles}
            />
            <Typography {...typographyStyles}>Выберите необходомые операции</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={plus} onChange={handleChangePlus} />} label="+" />
                <FormControlLabel control={<Checkbox checked={minus} onChange={handleChangeMinus} />} label="-" />
            </FormGroup>
            <Button
                fullWidth
                color="error"
                onClick={handleFinish}
            >
                Submit
            </Button>
            {firstValue && !errorMessage && (
                <>
                    <Typography {...typographyStyles}>{firstValue + operation + secondValue + ' = ?'}</Typography>
                    <TextField
                        value={result}
                        onChange={handleChangeResult}
                        {...textFieldStyles}
                        label={errorCheck}
                        error={errorCheck === 'Ошибка'}
                    />
                    <Button
                        fullWidth
                        color="error"
                        onClick={handleCheckResult}
                    >
                        Check
                    </Button>
                </>
            )}
            {errorMessage && <Typography {...typographyStyles} color="error">{errorMessage}</Typography>}
        </>
    );
};

export default Training;
