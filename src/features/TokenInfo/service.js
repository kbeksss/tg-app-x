import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const axiosR = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
})



export async function fetchMarketChart(id, days) {
    // return {
    //     prices: [
    //         [1703635200000, 2000.12],
    //         [1703638800000, 1610.45],
    //         [1703642400000, 2000.67],
    //         [1703646000000, 1605.34],
    //         [1703649600000, 2000.87],
    //         [1703653200000, 1609.43],
    //         [1703656800000, 2000.5],
    //     ],
    //     market_caps: [
    //         [1703635200000, 192000000000],
    //         [1703638800000, 194500000000],
    //         [1703642400000, 190000000000],
    //         [1703646000000, 191500000000],
    //         [1703649600000, 193000000000],
    //         [1703653200000, 192500000000],
    //         [1703656800000, 195000000000],
    //     ],
    //     total_volumes: [
    //         [1703635200000, 12000000000],
    //         [1703638800000, 12500000000],
    //         [1703642400000, 11800000000],
    //         [1703646000000, 11950000000],
    //         [1703649600000, 12200000000],
    //         [1703653200000, 12100000000],
    //         [1703656800000, 12550000000],
    //     ],
    // }

    const { data } = await axiosR.get(`/${id}/market_chart`, {
        params: {
            vs_currency: 'usd',
            days,
            interval: 'daily',
        },
    })

    return data
}

export function useMarketChart({ id, days }) {
    const result = useQuery({
        queryFn: async () => await fetchMarketChart(id, days),
        queryKey: ['marketChart', id, days],
    })
    return result
}
