import React, { useMemo, useState } from 'react'
import { Box, Button } from '@mui/material'
import { networks } from '@_mock/networks.js'
import { Search, SwipeableDialog } from '@shared/ui'
import NetworkItems from '@widgets/NetworkSelect/ui/NetworkItems.jsx'

const NetworkSelect = ({
    isDrawerOpen,
    toggleDrawer,
    setDrawerHeight,
    network,
    setNetwork,
    children,
}) => {
    const [searchValue, setSearchValue] = useState('')

    const filteredNetworks = useMemo(() => {
        return networks.filter((network) =>
            network.label.toLowerCase().includes(searchValue.toLowerCase())
        )
    }, [searchValue, networks])
    const onSelected = () => {
        toggleDrawer(false)()
        setSearchValue('')
    }
    return (
        <>
            {children}
            <SwipeableDialog
                contentHeight
                setDrawerHeight={setDrawerHeight}
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isDrawerOpen}
                label={'Select Network'}>
                <Box sx={{ pt: '14px' }}>
                    <Search value={searchValue} setValue={setSearchValue} />
                    <NetworkItems
                        selectedCb={onSelected}
                        selectedNetwork={network}
                        setNetwork={setNetwork}
                        networks={filteredNetworks}
                    />
                    <Button
                        onClick={() => setNetwork('')}
                        variant={'contained'}
                        fullWidth>
                        Reset
                    </Button>
                </Box>
            </SwipeableDialog>
        </>
    )
}

export default NetworkSelect
