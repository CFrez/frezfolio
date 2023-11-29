import { TopperProperties } from '../types'

export enum PageUrl {
    Home = '/',
    About = '/about',
    UserExperience = '/ux',
    SoftwareEngineering = '/software',
    GraphicDesign = '/graphics',
    ArchEngineering = '/archeng',
    ArchDesign = '/archdesign',
    System = '/system',
}

export enum Topper {
    BG = 'BG',
    GD = 'GD',
    SE = 'SE',
    UX = 'UX',
    AE = 'AE',
    AD = 'AD',
}

export const topperProperties: Record<Topper, TopperProperties> = {
    [Topper.BG]: {
        src: '/images/topper/bg.svg',
        srcLabeled: '/images/topper/labeled-bg.svg',
        alt: 'dallas skyline background',
        link: PageUrl.Home,
        percentage: 0,
    },
    [Topper.GD]: {
        src: '/images/topper/gd.svg',
        srcLabeled: '/images/topper/labeled-gd.svg',
        alt: 'graphic design',
        link: PageUrl.GraphicDesign,
        percentage: 966 / 1470,
    },
    [Topper.SE]: {
        src: '/images/topper/se.svg',
        srcLabeled: '/images/topper/labeled-se.svg',
        alt: 'software engineering',
        link: PageUrl.SoftwareEngineering,
        percentage: 1143 / 1470,
    },
    [Topper.UX]: {
        src: '/images/topper/ux.svg',
        srcLabeled: '/images/topper/labeled-ux.svg',
        alt: 'user experience',
        link: PageUrl.UserExperience,
        percentage: 715 / 1470,
    },
    [Topper.AE]: {
        src: '/images/topper/ae.svg',
        srcLabeled: '/images/topper/labeled-ae.svg',
        alt: 'architectural engineering',
        link: PageUrl.ArchEngineering,
        percentage: 435 / 1470,
    },
    [Topper.AD]: {
        src: '/images/topper/ad.svg',
        srcLabeled: '/images/topper/labeled-ad.svg',
        alt: 'architectural design',
        link: PageUrl.ArchDesign,
        percentage: 58 / 1470,
    },
}
