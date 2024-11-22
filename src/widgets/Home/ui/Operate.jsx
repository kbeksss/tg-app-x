import React from 'react'
import { Box, Stack } from '@mui/material'
import OperateItem from './OperateItem'
import { useNavigate } from 'react-router'
import { paths } from '@pages/paths.js'

const Operate = () => {
    const navigate = useNavigate()
    return (
        <Stack spacing={3} direction={'row'} justifyContent={'center'}>
            <OperateItem
                onClick={() => navigate(paths.receive)}
                icon={'hugeicons:download-01'}
                label='Receive'
            />
            {/*<OperateItem*/}
            {/*    onClick={() => navigate(paths.exchange)}*/}
            {/*    icon={'humbleicons:exchange-horizontal'}*/}
            {/*    label='Exchange'*/}
            {/*/>*/}
            <OperateItem
                onClick={() => navigate(paths.send)}
                icon={'lets-icons:download-circle'}
                label='Send'
            />
        </Stack>
    )
}

export default Operate
