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
    },
    typography: {
        h1: {
            fontSize: 46,
            fontWeight: 700,
        },
    },
})

export const withMui = (component) => () => {
    return <ThemeProvider theme={theme}>{component()}</ThemeProvider>
}
