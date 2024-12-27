import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const axiosR = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
})

export async function fetchMarketChart(id, days) {
    const { data } = await axiosR.get(`/${id}/market_chart`, {
        params: {
            vs_currency: 'usd',
            days,
        },
    })

    return data
}

export async function fetchCoinDetails(id) {
    const { data } = await axiosR.get(`/markets?vs_currency=usd&ids=${id}`)
    return data
}

export function useMarketChart({ id, days }) {
    const result = useQuery({
        queryFn: async () => await fetchMarketChart(id, days),
        queryKey: ['marketChart', id, days],
    })
    return result
}

export function useCoinDetails({ id }) {
    const result = useQuery({
        queryFn: async () => await fetchCoinDetails(id),
        queryKey: ['coinDetails', id],
    })
    return result
}
