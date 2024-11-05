import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

const iconifyClasses = {
    root: 'mnl__icon__root',
    flag: 'mnl__icon__flag',
};

const Iconify = forwardRef(({ className, width = 20, sx, ...other }, ref) => (
    <Box
        ssr
        ref={ref}
        component={Icon}
        className={iconifyClasses.root.concat(className ? ` ${className}` : '')}
        sx={{
            width,
            height: width,
            flexShrink: 0,
            display: 'inline-flex',
            ...sx,
        }}
        {...other}
    />
));

export default Iconify;
