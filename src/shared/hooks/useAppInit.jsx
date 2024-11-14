import { useLoginMutation } from '@shared/api/services'
import { useEffect } from 'react'
import { getAccessToken } from '@app/entities/auth/model'

export const useAppInit = () => {
    const [login] = useLoginMutation()
    useEffect(() => {
        if (!getAccessToken() && tg?.initData) {
            login({ initData: tg?.initData })
        }
    }, [])
}
