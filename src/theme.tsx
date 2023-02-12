import { createTheme } from '@mui/material/'

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(0, 125, 255, 1)',
        },
    },

    typography: {
        fontSize: 20,
        fontFamily: "Roboto",

        h3: {
            fontSize: 30,
        },

        h4: {
            fontSize: 25,
        }
    },

    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                }
            }
        },

        MuiCardHeader: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 125, 255, 1)',
                    color: 'white',
                    fontFamily: "Roboto",
                    fontSize: 40,
                    fontWeight: 100,
                }
            }
        }
    }
})

export default theme;