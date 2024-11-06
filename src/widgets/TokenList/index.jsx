import React from 'react'
import { Box, Stack } from '@mui/material'
import TokenItem from '@widgets/TokenList/ui/TokenItem.jsx'

const TokenList = ({ tokens }) => {
    return (
        <Stack spacing={1}>
            {tokens?.map((token) => (
                <TokenItem key={token.id} {...token} />
            ))}
        </Stack>
    )
}

export default TokenList
