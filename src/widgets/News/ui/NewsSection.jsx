import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { TabPanel } from '@shared/ui'

const NewsSection = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{ px: 2 }}>
            <Box sx={{ pb: 2 }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label={'For you'} />
                    <Tab label={'Popular'} />
                    <Tab label={'Your authors'} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                for you
            </TabPanel>
            <TabPanel value={value} index={1}>
                popular
            </TabPanel>
            <TabPanel value={value} index={2}>
                Your authors
            </TabPanel>
        </Box>
    )
}

export default NewsSection
