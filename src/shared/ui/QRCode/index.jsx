import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import QRCodeStyling from 'qr-code-styling'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const QRCode = ({ value, qrImage }) => {
    const qrCode = useRef(null)
    const ref = useRef(null)
    const { isDarkMode } = useThemeContext()

    useEffect(() => {
        qrCode.current = new QRCodeStyling({
            width: 300,
            height: 300,
            margin: 10,
            dotsOptions: {
                color: isDarkMode ? '#fff' : '#181818',
                type: 'rounded',
            },
            cornersSquareOptions: {
                type: 'extra-rounded',
            },
            backgroundOptions: {
                color: isDarkMode ? '#181818' : '#fff',
            },
            imageOptions: {
                crossOrigin: 'anonymous',
                margin: 20,
                imageSize: 0.5,
                hideBackgroundDots: true,
            },
            logoOptions: {
                shape: 'circle',
                bgColor: '#ffffff',
            },
            data: value,
            image: '/assets/icons/network/eth-icon.png',
        })

        if (ref.current) {
            qrCode.current.append(ref.current)
        }
    }, [])

    useEffect(() => {
        if (qrCode.current) {
            qrCode.current.update({
                data: value,
            })
        }
    }, [value])
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
            }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    width: 65,
                    height: 65,
                    transform: 'translateY(-50%)',
                }}>
                {qrImage}
            </Box>
            <Box
                sx={{
                    height: 'calc(30vh)',
                    canvas: {
                        width: 'auto',
                        height: '100%',
                    },
                }}
                ref={ref}
            />
        </Box>
    )
}

export default QRCode
