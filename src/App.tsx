import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Authenticate from "./Components/Authenticate/Authenticate";

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

    const [authOpen, setAuthOpen] = React.useState(false)

    const router = useRoutes(routes)

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar setOpen={setAuthOpen} />
                { router }
                <Authenticate open={authOpen} setOpen={setAuthOpen} />
            </div>
        </ThemeProvider>
    );
}

export default App;
