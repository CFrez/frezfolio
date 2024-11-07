import { TopperProperties } from '../types'

export const categoryTitles = {
    UserExperience: 'User Experience',
    Software: 'Software Engineering',
    MiscDesign: 'Miscellaneous Design',
    ArchEng: 'Architectural Engineering',
    ArchDesign: 'Architectural Design',
}

export type Category = keyof typeof categoryTitles

export const allCategories = Object.keys(categoryTitles) as Category[]

interface CategoryColor {
    color: string
    hoverColor: string
    border: string
    background: string
}

/**
 * The colors for each category.
 *
 * This is needed since tailwind does not like creating dynamic classes.
 */
export const categoryColors: Record<Category, CategoryColor> = {
    ArchDesign: {
        color: 'text-ad',
        hoverColor: 'hover:text-ad',
        border: 'border-ad',
        background: 'bg-ad',
    },
    ArchEng: {
        color: 'text-ae',
        hoverColor: 'hover:text-ae',
        border: 'border-ae',
        background: 'bg-ae',
    },
    MiscDesign: {
        color: 'text-md',
        hoverColor: 'hover:text-md',
        border: 'border-md',
        background: 'bg-md',
    },
    Software: {
        color: 'text-se',
        hoverColor: 'hover:text-se',
        border: 'border-se',
        background: 'bg-se',
    },
    UserExperience: {
        color: 'text-ux',
        hoverColor: 'hover:text-ux',
        border: 'border-ux',
        background: 'bg-ux',
    },
}

export const topperProperties: Record<Category | 'Home', TopperProperties> = {
    Home: {
        src: '/images/topper/bg.svg',
        srcLabeled: '/images/topper/labeled-bg.svg',
        alt: 'dallas skyline border',
        style: 'left-0',
        percentage: 0,
    },
    MiscDesign: {
        src: '/images/topper/md.svg',
        srcLabeled: '/images/topper/labeled-md.svg',
        alt: 'graphic design',
        style: 'left-[64.232592%]',
        percentage: 944.22 / 1470,
    },
    Software: {
        src: '/images/topper/se.svg',
        srcLabeled: '/images/topper/labeled-se.svg',
        alt: 'software engineering',
        style: 'left-[77.687075%]',
        percentage: 1142 / 1470,
    },
    UserExperience: {
        src: '/images/topper/ux.svg',
        srcLabeled: '/images/topper/labeled-ux.svg',
        alt: 'user experience',
        style: 'left-[48.639456%]',
        percentage: 715 / 1470,
    },
    ArchEng: {
        src: '/images/topper/ae.svg',
        srcLabeled: '/images/topper/labeled-ae.svg',
        alt: 'architectural engineering',
        style: 'left-[29.242857%]',
        percentage: 429.87 / 1470,
    },
    ArchDesign: {
        src: '/images/topper/ad.svg',
        srcLabeled: '/images/topper/labeled-ad.svg',
        alt: 'architectural design',
        style: 'left-[3.945578%]',
        percentage: 58 / 1470,
    },
}
