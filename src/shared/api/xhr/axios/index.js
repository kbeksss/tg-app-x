import axios from 'axios'
import {
    ACCESS_TOKEN,
    BACK_API_KEY,
    BASE_URL,
    SCRAPER_URL,
} from '@shared/config'

const axiosRequest = axios.create({
    baseURL: BASE_URL,
})

const axiosScraperRequest = axios.create({
    baseURL: SCRAPER_URL,
})

const axiosRequestClean = axios.create({
    baseURL: BASE_URL,
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

getInterceptorResponse(axiosScraperRequest)
getInterceptorRequest(axiosScraperRequest)

export { axiosRequest, axiosRequestClean, axiosScraperRequest }
