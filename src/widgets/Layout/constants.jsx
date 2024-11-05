import { BookIcon, ProfileIcon, DYORIcon, RaffleIcon } from '@shared/ui/icons';
import { BottomNavigationAction, Box, styled } from '@mui/material';

export const bottomNavigation = [
    {
        label: 'BOTTOM_MENU_RAFFLES',
        value: '/raffles',
        icon: <RaffleIcon />,
    },
    {
        label: '',
        value: '/',
        icon: (
            <Box sx={{ position: 'relative' }}>
                <DYORIcon
                    sx={{
                        width: 60,
                        height: 60,
                        position: 'absolute',
                        bottom: '-20px',
                        left: 0,
                        transform: 'translateX(-50%)',
                    }}
                />
            </Box>
        ),
    },
    {
        label: 'BOTTOM_MENU_PROFILE',
        value: '/profile',
        icon: <ProfileIcon />,
    },
];

export const SBottomNavigationAction = styled(BottomNavigationAction)`
    max-width: unset;
    border-radius: 10px;
    '& .MuiBottomNavigationAction-label' {
        margin-top: 4px;
        font-weight: 600;
        font-size: 10px;
    }
    '& .MuiBottomNavigationAction-label.Mui-selected' {
        font-size: 10px;
    }
`;
