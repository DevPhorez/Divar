import React from 'react';
import Navbar from "./Components/Navbar/Navbar";

import Home from './Page/Home/Home'
import Support from "./Page/Support/Support";

import { useRoutes } from 'react-router-dom'
import routes from './Routes'


import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        error: {
            main: '#A62626',
            contrastText: '#fff'
        },
        secondary: {
            main: '#0000000A'
        }
    }
});


function App() {

    const router = useRoutes(routes)

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar />
                { router }
            </div>
        </ThemeProvider>
    );
}

export default App;
