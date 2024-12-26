import React from 'react'
import ReactApexChart from 'react-apexcharts'
import dayjs from 'dayjs'
import { customChartTooltip } from '@shared/utils/functions'

const options = {
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
        colors: 'green',
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
            let data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
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
}

const CryptoChart = ({ series }) => {
    return series ? (
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
    ) : null
}

export default CryptoChart
