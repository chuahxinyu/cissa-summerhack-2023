import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    typography: {
        fontSize: 20,
        fontFamily: "Roboto",

        h1: {
            fontSize: 40,
        },
        h2: {
            fontSize: 30,
        }
    }
})

export default theme;