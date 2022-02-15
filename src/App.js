import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import React from "react";
import useApp from "./hooks/useApp";
import { boxStyles } from "./styles/styles";

function App() {
  const { expressionValue, calculatorButtonsConfig, handleReset } = useApp();
  return (
    <Box sx={boxStyles}>
      <TextField value={expressionValue} size="small" fullWidth/>
      {calculatorButtonsConfig.map(stringButtons => (
        <ButtonGroup fullWidth>
          {stringButtons.map(({ label, onClickFn }) => (
            <Button color="error" variant="contained" onClick={onClickFn}>{label}</Button>
          ))}
        </ButtonGroup>
      ))}
      <Button fullWidth color="error" onClick={handleReset}>Reset</Button>
    </Box>
  );
}

export default App;
