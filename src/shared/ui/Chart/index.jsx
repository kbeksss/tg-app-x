import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import dayjs from 'dayjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Chart = ({ token }) => {
    const [data, setData] = useState()
    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                ticks: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    display: true,
                },
            },
        },
    })
    const show = async () => {
        if (!token) {
            return
        }
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${token.toLowerCase()}/market_chart?vs_currency=usd&days=7`
        )
        const chartData = res.data.prices.map(([timestamp, price]) => ({
            x: timestamp,
            y: price,
        }))
        const data = {
            labels: chartData.map((point) =>
                dayjs(point.x).format('MM-DD HH:mm:ss')
            ),
            datasets: [
                {
                    label: `${token.toLowerCase()} Price`,
                    data: chartData.map((point) => point.y),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        }
        setData(data)
        console.log('res', res)
    }
    useEffect(() => {
        if (token) {
            show()
        }
    }, [token])
    return (
        <>
            <Button variant={'contained'} onClick={show}>
                show
            </Button>
            {data ? (
                <Box sx={{ px: 4 }}>
                    <Line data={data} options={options} />
                </Box>
            ) : null}
        </>
    )
}

export default Chart
