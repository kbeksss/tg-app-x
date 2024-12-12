import React, { Fragment } from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'

const InfoRows = ({ rows }) => {
    const { isDark } = useTg()
    return (
        <Box
            sx={{
                borderRadius: '16px',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}`,
                py: '20px',
                px: 2,
            }}>
            {rows?.map((row, index) => (
                <Fragment key={index}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography color={'text.secondary'} variant={'body2'}>
                            {row?.label}
                        </Typography>
                        <Typography variant={'subtitle2'}>
                            {row?.value}
                        </Typography>
                    </Stack>
                    {rows.length > index + 1 && (
                        <Divider
                            sx={{
                                my: 2,
                                borderColor: isDark
                                    ? 'rgba(255,255,255,0.3)'
                                    : 'rgba(0,0,0,0.3)',
                            }}
                        />
                    )}
                </Fragment>
            ))}
        </Box>
    )
}

export default InfoRows
