import React, { useMemo } from 'react'
import ReactApexChart from 'react-apexcharts'
import dayjs from 'dayjs'
import { customChartTooltip } from '@shared/utils/functions'
import { Box, useTheme } from '@mui/material'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const CryptoChart = ({ series, setSelectedInfo }) => {
    const { isDarkMode } = useThemeContext()
    const theme = useTheme()
    const options = useMemo(
        () => ({
            chart: {
                toolbar: {
                    show: false,
                },
                type: 'area',
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
            },
            fill: {
                type: 'solid',
                colors: [
                    isDarkMode
                        ? 'rgba(191, 254, 110, 0.1)'
                        : 'rgba(0, 122, 255, 0.1)',
                ],
            },
            markers: {
                strokeColors: theme.palette.primary.main,
                strokeWidth: 2,
                colors: ['#fff'],
            },
            colors: [theme.palette.primary.main],
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
                    // setSelectedInfo(data)
                    return customChartTooltip(data[1], 4)
                },
            },
            xaxis: {
                type: 'numeric',
                axisTicks: { color: '#777' },
                axisBorder: { color: '#777' },
                labels: {
                    show: false,
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
                '& .apexcharts-tooltip.apexcharts-theme-light': {
                    border: 'none',
                    backgroundColor: 'transparent',
                },
                '& .chart-tooltip': {
                    borderRadius: '10px',
                    p: 2,
                    border: 'none',
                    backgroundColor: 'primary.main',
                    color: isDarkMode ? '#000' : '#fff',
                },
            }}>
            <ReactApexChart
                type={'area'}
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
