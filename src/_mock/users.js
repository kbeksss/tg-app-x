import { nanoid } from 'nanoid'

export const users = [
    { id: nanoid(), name: 'Some name', username: 'cz_binance' },
    { id: nanoid(), name: 'Another name', username: 'TimDrapper' },
    { id: nanoid(), name: 'oo name', username: 'VitalikButerin' },
    { id: nanoid(), name: 'aaaa', username: 'brian_armstrong' },
]

export const myUsers = users.map((user) => ({ ...user, subscribed: true }))
