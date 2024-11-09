import React, { useMemo, useState } from 'react'
import { Avatar, Box, Button, Stack } from '@mui/material'
import ExchangeCard from './ui/ExchangeCard.jsx'
import { tokens } from '@_mock/currency.js'
import { BottomButton, Iconify } from '@shared/ui'
import ConfirmExchange from './ui/ConfirmExchange.jsx'
import { useQueryParams } from '@shared/hooks/useQueryParams.js'
import { paths } from '@pages/paths.js'
import dayjs from 'dayjs'

const Exchange = () => {
    const { navigateWithParams } = useQueryParams()
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
    const [sellCurrency, setSellCurrency] = useState({ currencyCode: '' })
    const [buyCurrency, setBuyCurrency] = useState({ currencyCode: '' })
    const [sellAmount, setSellAmount] = useState(0)
    const [buyAmount, setBuyAmount] = useState(0)
    const handleCurrencyChange = (currencyCode, setCurrency) => {
        const selectedToken = tokens.find(
            (token) => token.currencyCode === currencyCode
        )
        setCurrency(selectedToken || { currencyCode: '' })
    }
    const datasValid = useMemo(() => {
        return true
        // !!buyAmount &&
        // !!sellAmount &&
        // !!buyCurrency.currencyCode &&
        // !!sellCurrency.currencyCode
    }, [buyAmount, sellAmount, buyCurrency, sellCurrency])
    const handleConfirm = () => {
        navigateWithParams(paths.exchangeSuccess, {
            date: dayjs().format('MMM D, YYYY [at] h:mmA'),
            sell: `${sellAmount} ${sellCurrency.currencyCode}`,
            buy: `${buyAmount} ${buyCurrency.currencyCode}`,
        })
    }
    return (
        <Box sx={{ px: 2 }}>
            <Stack spacing={1} sx={{ position: 'relative' }}>
                <ExchangeCard
                    type={'Sell'}
                    currency={sellCurrency}
                    onCurrencyChange={(currencyCode) =>
                        handleCurrencyChange(currencyCode, setSellCurrency)
                    }
                    tokens={tokens}
                    amount={sellAmount}
                    onChangeAmount={(e) => setSellAmount(e.target.value)}
                />
                <ExchangeCard
                    type={'Buy'}
                    currency={buyCurrency}
                    onCurrencyChange={(currencyCode) =>
                        handleCurrencyChange(currencyCode, setBuyCurrency)
                    }
                    tokens={tokens}
                    amount={buyAmount}
                    onChangeAmount={(e) => setBuyAmount(e.target.value)}
                />
                <Avatar
                    sx={{
                        position: 'absolute',
                        width: 30,
                        height: 30,
                        backgroundColor: '#fff',
                        left: '50%',
                        top: '50%',
                        transform:
                            'translate(calc(-50%), calc(-50% - 8px)) rotate(90deg)',
                    }}>
                    <Iconify color={'text.secondary'} icon={'uil:exchange'} />
                </Avatar>
            </Stack>
            <ConfirmExchange
                onConfirm={handleConfirm}
                open={confirmDialogOpen}
                onClose={() => setConfirmDialogOpen(false)}
                sellAmount={`-${sellAmount} ${sellCurrency.currencyCode}`}
                buyAmount={`+${buyAmount} ${buyCurrency.currencyCode}`}
            />
            <BottomButton
                disabled={!datasValid}
                label={'Next'}
                onClick={() => setConfirmDialogOpen(true)}
                withToolbar
            />
        </Box>
    )
}

export default Exchange
