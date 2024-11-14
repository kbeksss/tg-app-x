import axios from 'axios'
import { ACCESS_TOKEN, BACK_API_KEY, BASE_URL } from '@shared/config'

const axiosRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-API-KEY': BACK_API_KEY,
    },
})

const axiosRequestClean = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-API-KEY': BACK_API_KEY,
    },
})

const getInterceptorRequest = (baseUrl) => {
    baseUrl.interceptors.request.use(
        (request) => {
            request.headers.Authorization = `Bearer ${
                localStorage.getItem(ACCESS_TOKEN) || ''
            }`
            return request
        },
        (error) => {
            return Promise.reject(error)
        }
    )
    baseUrl.interceptors.request.use((config) => {
        return config
    })
}

const getInterceptorResponse = (baseUrl) => {
    baseUrl.interceptors.response.use(
        (response) => {
            return response.data
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}

getInterceptorResponse(axiosRequest)
getInterceptorRequest(axiosRequest)

getInterceptorResponse(axiosRequestClean)

export { axiosRequest, axiosRequestClean }
