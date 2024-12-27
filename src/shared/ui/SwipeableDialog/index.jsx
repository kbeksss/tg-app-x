import React, { useMemo, useState } from 'react'
import {
    Box,
    Grid,
    IconButton,
    Stack,
    SwipeableDrawer,
    Typography,
} from '@mui/material'
import { Edge, Iconify } from '@shared/ui'

const useSwipeableDialog = ({ initialHalf } = { initialHalf: '55vh' }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerHeight, setDrawerHeight] = useState(initialHalf)
    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open)
    }
    return {
        isDrawerOpen,
        toggleDrawer,
        drawerHeight,
        setDrawerHeight,
    }
}

const SwipeableDialog = ({
    triggerElement,
    isDrawerOpen,
    toggleDrawer,
    children,
    initialHalf = '55vh',
    onCloseFunc,
    contentHeight = false,
    setDrawerHeight,
    drawerHeight,
    label,
}) => {
    const handleSwipeUp = () => {
        setDrawerHeight('94vh')
    }

    const handleSwipeDown = () => {
        setDrawerHeight(initialHalf)
    }
    return (
        <>
            {triggerElement}
            <SwipeableDrawer
                anchor='bottom'
                open={isDrawerOpen}
                onClose={onCloseFunc ? onCloseFunc : toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen
                swipeAreaWidth={30}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        height: contentHeight ? 'unset' : drawerHeight,
                        backgroundColor: 'background.paper',
                        transition: 'height 0.3s ease-in-out',
                    },
                }}>
                <Box
                    sx={{
                        height: '100%',
                        overflow: 'auto',
                        padding: 2,
                    }}
                    onTouchMove={(e) => {
                        const touchY = e.touches[0].clientY
                        if (touchY < window.innerHeight / 2) {
                            handleSwipeUp()
                        } else {
                            handleSwipeDown()
                        }
                    }}>
                    <Stack direction={'row'} justifyContent={'center'}>
                        <Edge />
                    </Stack>
                    <Box sx={{ py: 1, position: 'relative' }}>
                        <Typography
                            variant={'h6'}
                            sx={{ fontSize: 16 }}
                            align={'center'}>
                            {label}
                        </Typography>
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}>
                            <IconButton
                                onClick={
                                    onCloseFunc
                                        ? onCloseFunc
                                        : toggleDrawer(false)
                                }
                                sx={{
                                    width: 28,
                                    height: 28,
                                }}>
                                <Iconify
                                    sx={{
                                        color: 'text.primary',
                                    }}
                                    icon={'iconamoon:close-bold'}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>{children}</Box>
                </Box>
            </SwipeableDrawer>
        </>
    )
}

export default SwipeableDialog
export { useSwipeableDialog }
