import { Skeleton } from '@mui/material'
import React from 'react'

const LoadingElement = ({ isLoading, children, ...props }) =>
    isLoading ? <Skeleton {...props} /> : children

export default LoadingElement
