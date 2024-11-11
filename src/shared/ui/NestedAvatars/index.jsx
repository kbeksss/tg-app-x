import React from 'react'
import {Box} from "@mui/material";

const NestedAvatars = ({ avatar, secondaryAvatar }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: `url(${avatar})`,
                backgroundSize: 'cover',
                width: 40,
                height: 40,
                borderRadius: '50%',
            }}>
            <Box
                sx={{
                    position: 'absolute',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${secondaryAvatar})`,
                    width: 20,
                    height: 20,
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
