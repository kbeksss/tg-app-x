import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
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
                            <Iconify
                                color={'text.secondary'}
                                icon={'tabler:search'}
                            />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position={'end'}>
                            <Iconify
                                color={'text.primary'}
                                icon={'mdi:microphone'}
                                width={22}
                            />
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    color: 'text.secondary',
                    height: 42,
                    borderRadius: '30px',
                },
                '& .MuiInputBase-root': {
                    backgroundColor: 'background.grey',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '30px',
                },
                '& fieldset': {
                    border: 'none',
                },
            }}
        />
    )
}

export default Search
