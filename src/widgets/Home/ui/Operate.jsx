import React from 'react'
import { Box, Stack } from '@mui/material'
import OperateItem from './OperateItem'

const Operate = () => {
    return (
        <Stack spacing={3} direction={'row'} justifyContent={'center'}>
            <OperateItem icon={'hugeicons:download-01'} label='Receive' />
            <OperateItem
                icon={'humbleicons:exchange-horizontal'}
                label='Exchange'
            />
            <OperateItem icon={'lets-icons:download-circle'} label='Send' />
        </Stack>
    )
}

export default Operate
