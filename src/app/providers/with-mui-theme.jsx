import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

const tg = window.Telegram.WebApp
const themeParams = tg.themeParams
const isDarkMode = tg.colorScheme === 'dark'

const theme = createTheme({
    palette: {
        primary: {
            main: '#007AFF',
        },
        text: {
            secondary: '#707579',
        },
    },
    typography: {
        h1: {
            fontSize: 46,
            fontWeight: 700,
        },
        h4: {
            fontSize: 24,
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    textTransform: 'initial',
                    height: 50,
                    fontSize: 17,
                    borderRadius: '10px',
                },
            },
        },
    },
})

export const withMui = (component) => () => {
    return <ThemeProvider theme={theme}>{component()}</ThemeProvider>
}
