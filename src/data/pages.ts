import { TopperProperties } from '../types'

export enum PageUrl {
    Home = '/',
    UserExperience = '/ux',
    SoftwareEngineering = '/software',
    GraphicDesign = '/graphics',
    ArchEngineering = '/archeng',
    ArchDesign = '/archdesign',
}

export type Page = keyof typeof PageUrl

export const pageTitles: Record<Page, string> = {
    Home: 'Home',
    UserExperience: 'User Experience',
    SoftwareEngineering: 'Software Engineering',
    GraphicDesign: 'Graphic Design',
    ArchEngineering: 'Architectural Engineering',
    ArchDesign: 'Architectural Design',
}

export const topperProperties: Record<Page, TopperProperties> = {
    Home: {
        src: '/images/topper/bg.svg',
        srcLabeled: '/images/topper/labeled-bg.svg',
        alt: 'dallas skyline background',
        link: PageUrl.Home,
        style: 'left-0',
    },
    GraphicDesign: {
        src: '/images/topper/gd.svg',
        srcLabeled: '/images/topper/labeled-gd.svg',
        alt: 'graphic design',
        link: PageUrl.GraphicDesign,
        style: 'left-[65.714286%]',
    },
    SoftwareEngineering: {
        src: '/images/topper/se.svg',
        srcLabeled: '/images/topper/labeled-se.svg',
        alt: 'software engineering',
        link: PageUrl.SoftwareEngineering,
        style: 'left-[77.755102%]',
    },
    UserExperience: {
        src: '/images/topper/ux.svg',
        srcLabeled: '/images/topper/labeled-ux.svg',
        alt: 'user experience',
        link: PageUrl.UserExperience,
        style: 'left-[48.639456%]',
    },
    ArchEngineering: {
        src: '/images/topper/ae.svg',
        srcLabeled: '/images/topper/labeled-ae.svg',
        alt: 'architectural engineering',
        link: PageUrl.ArchEngineering,
        style: 'left-[29.591837%]',
    },
    ArchDesign: {
        src: '/images/topper/ad.svg',
        srcLabeled: '/images/topper/labeled-ad.svg',
        alt: 'architectural design',
        link: PageUrl.ArchDesign,
        style: 'left-[3.945578%]',
    },
}
