import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import { Iconify } from '@shared/ui'

const Search = () => {
    return (
        <TextField
            fullWidth
            placeholder={'Search'}
            variant='outlined'
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Iconify icon={'tabler:search'} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position={'end'}>
                            <Iconify icon={'mdi:microphone'} />
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    background: '#F4F4F6',
                    height: 42,
                    borderRadius: '16px'
                },
            }}
        />
    )
}

export default Search
