import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { BottomButton, Tag } from '@shared/ui'
import { copyToClipboard, notify } from '@shared/utils/functions'
import SaveWarn from './ui/SaveWarn'

const SeedPhrase = () => {
    const [isWarnOpen, setIsWarnOpen] = useState(false)
    const onCopy = async () => {
        copyToClipboard(phrases.join(' ') || '')
    }
    return (
        <>
            <Box sx={{ px: 2, textAlign: 'center' }}>
                <Typography variant={'h4'} sx={{ mb: 3 }}>
                    Seed Phrase
                </Typography>
                <Typography color={'text.secondary'}>
                    Please carefully write down these 12 words.
                </Typography>
            </Box>
            <Box sx={{ px: 3, mt: '15vh' }}>
                <Stack
                    spacing={1}
                    justifyContent={'center'}
                    direction={'row'}
                    useFlexGap
                    flexWrap={'wrap'}>
                    {phrases.map((phrase, index) => (
                        <Tag key={index}>
                            <Stack spacing={1} direction={'row'}>
                                <Typography color={'text.secondary'}>
                                    {index + 1}
                                </Typography>
                                <Typography>{phrase}</Typography>
                            </Stack>
                        </Tag>
                    ))}
                </Stack>
                <Stack direction={'row'} justifyContent={'center'}>
                    <Button onClick={onCopy} sx={{ mt: 2 }}>
                        Copy to clipboard
                    </Button>
                </Stack>
            </Box>
            <SaveWarn
                open={isWarnOpen}
                handleClose={() => setIsWarnOpen(false)}
            />
            <BottomButton label={'Next'} onClick={() => setIsWarnOpen(true)} />
        </>
    )
}

const phrases = [
    'ибрагим',
    'вам',
    'что',
    'нибудь',
    'говорит',
    'прекрасное',
    'имя',
    'я',
    'прошла',
    'авганскую',
    'войну',
]

export default SeedPhrase
