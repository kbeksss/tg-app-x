import { useLoginMutation } from '@shared/api/services'
import { useEffect } from 'react'
import { getAccessToken } from '@app/entities/auth/model'
import { COLOR_THEME } from '@shared/config.js'

const tg = window.Telegram.WebApp

export const useAppInit = () => {
    const [login] = useLoginMutation()
    useEffect(() => {
        tg.ready()
        if (!localStorage.getItem(COLOR_THEME)) {
            localStorage.setItem(COLOR_THEME, tg?.colorScheme)
        }
    }, [])
    useEffect(() => {
        if (!getAccessToken() && tg?.initData) {
            login({ initData: tg?.initData })
        }
    }, [])
}
