import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const tg = window.Telegram.WebApp

export function useTg({ backButtonVisible }) {
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
        if (backButtonVisible) {
            showBackButton()

            tg.BackButton.onClick(() => {
                navigate(-1)
            })
        }
        return () => {
            hideBackButton()
            tg.BackButton.offClick()
        }
    }, [backButtonVisible])

    return {
        tg,
        user: tg.initDataUnsafe?.user,
        closeTg,
        showTgBackButton: showBackButton,
        hideTgBackButton: hideBackButton,
        onToggleButton,
        queryId: tg.initDataUnsafe?.query_id,
        themeParams: tg.themeParams,
    }
}
