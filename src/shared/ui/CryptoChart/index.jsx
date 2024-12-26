import React, { useMemo } from 'react'
import ReactApexChart from 'react-apexcharts'
import dayjs from 'dayjs'
import { customChartTooltip } from '@shared/utils/functions'
import { Box, useTheme } from '@mui/material'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const CryptoChart = ({ series, setCurrentInfo }) => {
    const { isDarkMode } = useThemeContext()
    const theme = useTheme()
    const options = useMemo(
        () => ({
            chart: {
                toolbar: {
                    show: false,
                },
                type: 'line',
                zoom: {
                    enabled: false,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 3,
                lineCap: 'round',
                colors: theme.palette.primary.main,
            },
            grid: {
                show: false,
            },
            yaxis: {
                opposite: true,
                labels: {
                    offsetX: 0,
                    style: { colors: '#777' },
                    formatter: (value) => '$' + value.toLocaleString(),
                },
            },
            tooltip: {
                custom: ({ seriesIndex, dataPointIndex, w }) => {
                    let data =
                        w.globals.initialSeries[seriesIndex].data[
                            dataPointIndex
                        ]
                    // setCurrentInfo(data)
                    return customChartTooltip(data[1], 4)
                },
            },
            xaxis: {
                type: 'numeric',
                axisTicks: { color: '#777' },
                axisBorder: { color: '#777' },
                labels: {
                    style: { colors: '#777' },
                    formatter: (value) => dayjs(value).format('MM-DD HH:mm:ss'),
                },
            },
        }),
        [theme]
    )
    return series ? (
        <Box
            sx={{
                '& .chart-tooltip': {
                    borderRadius: '10px',
                    p: 2,
                    backgroundColor: 'primary.main',
                    color: isDarkMode ? '#000' : '#fff',
                },
            }}>
            <ReactApexChart
                type={'line'}
                height={450}
                options={options}
                series={[
                    {
                        data: series,
                    },
                ]}
            />
        </Box>
    ) : null
}

export default CryptoChart