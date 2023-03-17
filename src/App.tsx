import React from 'react';
import Navbar from "./Components/Navbar/Navbar";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        error: {
            main: '#A62626',
            contrastText: '#fff'
        },
    }
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar />
            </div>
        </ThemeProvider>
    );
}

export default App;
