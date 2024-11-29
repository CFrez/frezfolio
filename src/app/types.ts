import type { FunctionComponent, ReactNode, SVGProps } from 'react'
import type { Category } from '../pages/categories/categories'

export type Theme = 'light' | 'dark'

export interface ImageData {
    src: string
    srcDark?: string
    alt: string
    caption?: string
    className?: string
}

export interface ImageElement {
    element: FunctionComponent<SVGProps<SVGSVGElement>>
    alt: string
    className?: string
}

export type Graphic = ImageData | ImageElement

export interface ProjectData {
    category: Category
    date: Date
    title: string
    url: string
    element: ReactNode
    subtitle?: string
    graphic: Graphic
    notes?: string
    details?: string
}

export interface CategoryInfo {
    category: Category
    className?: string
    info: ReactNode
}

export interface TopperProperties {
    src: string
    srcLabeled: string
    alt: string
    style: string
    /** used to document the numbers used for calculating the style left percentage */
    percentage: number
}
