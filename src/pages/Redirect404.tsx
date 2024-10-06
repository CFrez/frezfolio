import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const Redirect404 = () => {
    const { pathname } = useLocation()
    if (!pathname.includes('#')) {
        const baseUrl = pathname.split('/')[0]
        const remainingUrl = pathname.split('/', 2)[1]
        return <Navigate to={`${baseUrl}/#/${remainingUrl}`} replace />
    }
}
