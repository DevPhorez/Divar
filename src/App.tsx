import React from 'react';
import Navbar from "./Components/Navbar/Navbar";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Posts from "./Components/Posts/Posts";
import RightSide from "./Components/Right Side/RightSide";

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
                <div className="container-fluid" style={ { marginTop: '5rem' } }>
                    <div className="row">
                        <div className="col-3">
                            <div className='position-relative' style={ { width: '100%' } }>
                                <RightSide />
                            </div>
                        </div>
                        <div className="col-9 p-0">
                            <Posts />
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
