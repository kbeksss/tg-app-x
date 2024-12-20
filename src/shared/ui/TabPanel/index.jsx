import React from 'react';
import { Box } from '@mui/material';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && children}
        </Box>
    );
};

export default TabPanel;
