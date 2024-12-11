import React from 'react'
import {Box} from "@mui/material";

const NestedAvatars = ({ avatar, secondaryAvatar }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: `url(${avatar})`,
                backgroundSize: 'cover',
                width: 47,
                height: 47,
                borderRadius: '50%',
            }}>
            <Box
                sx={{
                    position: 'absolute',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${secondaryAvatar})`,
                    width: 23,
                    height: 23,
                    right: '-5px',
                    bottom: 0,
                    border: '1px solid #fff',
                    borderRadius: '50%',
                }}
            />
        </Box>
    )
}

export default NestedAvatars
