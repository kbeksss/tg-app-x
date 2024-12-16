import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onBackButtonClick } from '@telegram-apps/sdk'
import { COLOR_THEME } from '@shared/config.js'

const tg = window.Telegram.WebApp

export function useTg(params) {
    const [isDark, setIsDark] = useState(
        localStorage.getItem(COLOR_THEME) || tg?.colorScheme || window.darkTheme
    )
    const navigate = useNavigate()
    const closeTg = () => {
        tg.close()
    }
    const showBackButton = () => tg.BackButton.show()

    const hideBackButton = () => tg.BackButton.hide()

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    useEffect(() => {
        if (params?.backButtonVisible) {
            showBackButton()
            tg.BackButton.onClick(() => {
                if (params?.onBack) {
                    params.onBack()
                } else {
                    navigate(-1)
                }
            })
        }
        return () => {
            hideBackButton()
            tg.BackButton.offClick()
        }
    }, [params?.backButtonVisible])

    return {
        tg,
        // isDark: tg?.colorScheme === 'dark',
        isDark: isDark === 'dark',
        user: tg.initDataUnsafe?.user,
        closeTg,
        showTgBackButton: showBackButton,
        hideTgBackButton: hideBackButton,
        onToggleButton,
        queryId: tg.initDataUnsafe?.query_id,
        themeParams: tg.themeParams,
    }
}
