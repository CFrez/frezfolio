import type { ReactNode } from 'react'
import type { Category } from './data/categories'

export type Theme = 'light' | 'dark'

export interface ImageData {
    src: string
    alt: string
    caption?: string
    className?: string
}

export interface CategoryData {
    name: string
    icon: string
}

export interface ProjectData {
    category: Category
    date: Date
    title: string
    url: string
    element: ReactNode
    subtitle?: string
    graphic: {
        // Update type to have either element or src
        element?: ReactNode
        src: string
        srcDark?: string
        alt: string
    }
    notes?: string
    details?: string
}

export interface TopperProperties {
    src: string
    srcLabeled: string
    alt: string
    style: string
    /** used to document the numbers used for calculating the style left percentage */
    percentage: number
}

export interface AnimalFeature {
    feature?: string
    element?: string
    detail?: string
    purpose?: string
    reason?: string
    mvp?: boolean
}

export interface AnimalRole {
    role?: string
    element?: string
    detail?: string
    action?: string
    storage?: string
}
