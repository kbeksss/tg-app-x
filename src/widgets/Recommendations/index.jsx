import React from 'react'
import { Box, Stack } from '@mui/material'
import RecItem from './ui/RecItem.jsx'

const Recommendations = ({ tweets, avatarImg }) => {
    return (
        <Stack spacing={2}>
            {tweets?.map((tweet) => (
                <RecItem
                    key={tweet.id}
                    image={avatarImg}
                    text={tweet.text}
                    author={tweet.name}
                    date={tweet.created_at}
                />
            ))}
        </Stack>
    )
}

export default Recommendations
