import React from 'react';
import { Box } from "@mui/material";
import Calculator from "./components/Calculator/Calculator";
import { boxStyles } from "./styles/styles";
import Training from './components/Training/Training';

function App() {
  return (
    <Box sx={boxStyles}>
      <Calculator />
      <Training />
    </Box>
  );
}

export default App;
