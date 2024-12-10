import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import { Iconify } from '@shared/ui'

const Search = ({ value, setValue }) => {
    return (
        <TextField
            fullWidth
            value={value}
            onChange={(event) => setValue(event.target.value)}
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
                            <Iconify icon={'mdi:microphone'} width={22} />
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    height: 42,
                    borderRadius: '30px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '30px',
                },
            }}
        />
    )
}

export default Search
