import { TopperProperties } from '@/app/types'

/**
 * The titles for each category.
 *
 * The order below is how they are displayed on the website.
 */
export const categoryTitles = {
    ArchDesign: 'Architectural Design',
    ArchEng: 'Architectural Engineering',
    UserExperience: 'User Experience',
    MiscDesign: 'Miscellaneous Design',
    Software: 'Software Engineering',
}

export type Category = keyof typeof categoryTitles

export const allCategories = Object.keys(categoryTitles) as Category[]

interface CategoryColor {
    background: string
    border: string
    color: string
    decoration: string
    groupHoverColor: string
}

/**
 * The colors for each category.
 *
 * This is needed since tailwind does not like creating dynamic classes.
 */
export const categoryColors: Record<Category, CategoryColor> = {
    ArchDesign: {
        background: 'bg-archd',
        border: 'border-archd',
        color: 'text-archd',
        decoration: 'decoration-archd',
        groupHoverColor: 'group-hover:text-archd',
    },
    ArchEng: {
        background: 'bg-arche',
        border: 'border-arche',
        color: 'text-arche',
        decoration: 'decoration-arche',
        groupHoverColor: 'group-hover:text-arche',
    },
    MiscDesign: {
        background: 'bg-miscd',
        border: 'border-miscd',
        color: 'text-miscd',
        decoration: 'decoration-miscd',
        groupHoverColor: 'group-hover:text-miscd',
    },
    Software: {
        background: 'bg-swe',
        border: 'border-swe',
        color: 'text-swe',
        decoration: 'decoration-swe',
        groupHoverColor: 'group-hover:text-swe',
    },
    UserExperience: {
        background: 'bg-ux',
        border: 'border-ux',
        color: 'text-ux',
        decoration: 'decoration-ux',
        groupHoverColor: 'group-hover:text-ux',
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
