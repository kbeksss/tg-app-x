import React, { useState } from 'react'
import ConfirmSubscribe from './ui/ConfirmSubscribe.jsx'
import UserSubscribeSettings from './ui/UserSubscribeSettings.jsx'
import { SuccessDialog } from '@shared/ui'
import { notify } from '@shared/utils/functions/index.js'

const UserSubscribe = ({
    user,
    isSubscribing,
    setIsSubscribing,
    followUser,
}) => {
    const [successOpen, setSuccessOpen] = useState(false)
    const [subscribeSettingsOpen, setSubscribeSettings] = useState(false)

    const onSubscribeConfirm = () => {
        setIsSubscribing(false)
        setSubscribeSettings(true)
    }

    const onSave = async () => {
        const { error } = await followUser({ id: user.id })
        if (error) {
            notify({ type: 'error', msg: 'Follow error' })
            return
        }
        setSubscribeSettings(false)
        setSuccessOpen(true)
    }
    return (
        <>
            <ConfirmSubscribe
                open={isSubscribing}
                onClose={() => setIsSubscribing(false)}
                onConfirm={onSubscribeConfirm}
                username={user?.username}
            />
            <UserSubscribeSettings
                open={subscribeSettingsOpen}
                onClose={() => setSubscribeSettings(false)}
                avatar={user?.image}
                onSave={onSave}
                username={user?.username}
            />
            <SuccessDialog
                open={successOpen}
                onClose={() => setSuccessOpen(false)}
                title={'Successfully subscribed'}
                text={`You have successfully subscribed to https://x.com/${user?.username}`}
                actionLabel={'Okay'}
                action={() => setSuccessOpen(false)}
            />
        </>
    )
}

export default UserSubscribe
