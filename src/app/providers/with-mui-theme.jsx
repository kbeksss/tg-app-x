import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

const tg = window.Telegram.WebApp
const themeParams = tg.themeParams
const isDarkMode = tg.colorScheme === 'dark'

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 46,
        },
    },
})

export const withMui = (component) => () => {
    return <ThemeProvider theme={theme}>{component()}</ThemeProvider>
}
