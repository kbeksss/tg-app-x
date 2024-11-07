import { toast } from 'react-toastify'

export const notify = ({
    type,
    msg,
    id,
    autoCloseTime = 1500,
    icon,
    closeButton = false,
    hideProgressBar = true,
}) => {
    const options = {
        toastId: id,
        autoClose: autoCloseTime,
        closeButton,
        hideProgressBar,
    }
    icon ? (options.icon = icon) : null
    return toast[type](msg, options)
}

export const copyToClipboard = async (value) => {
    try {
        await navigator.clipboard.writeText(value)
        notify({ type: 'success', msg: 'Copied to clipboard' })
    } catch (err) {
        console.error('Copy fail: ', err)
    }
}
