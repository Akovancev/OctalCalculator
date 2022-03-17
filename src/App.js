import React from 'react';
import { Box } from "@mui/material";
import Calculator from "./components/Calculator/Calculator";
import { boxStyles } from "./styles/styles";

function App() {
  return (
    <Box sx={boxStyles}>
      <Calculator />
    </Box>
  );
}

export default App;
