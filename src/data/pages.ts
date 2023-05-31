import { TopperProperties } from '../types'

import BG from '/images/topper/bg.svg'
import AD from '/images/topper/ad.svg'
import AE from '/images/topper/ae.svg'
import HF from '/images/topper/hf.svg'
import SE from '/images/topper/se.svg'
import UX from '/images/topper/ux.svg'

import labeledBG from '/images/topper/labeled-bg.svg'
import labeledAD from '/images/topper/labeled-ad.svg'
import labeledAE from '/images/topper/labeled-ae.svg'
import labeledHF from '/images/topper/labeled-hf.svg'
import labeledSE from '/images/topper/labeled-se.svg'
import labeledUX from '/images/topper/labeled-ux.svg'

export enum PageUrl {
    Home = '/',
    About = '/about',
    UserExperience = '/ux',
    SoftwareEngineering = '/software',
    HumanFactors = '/humanfactors',
    ArchEngineering = '/archeng',
    ArchDesign = '/archdesign',
}

export enum Topper {
    BG = 'BG',
    UX = 'UX',
    SE = 'SE',
    HF = 'HF',
    AE = 'AE',
    AD = 'AD',
}

export const topperProperties: Record<Topper, TopperProperties> = {
    [Topper.BG]: {
        src: BG,
        srcLabeled: labeledBG,
        alt: 'dallas skyline background',
        link: PageUrl.Home,
        percentage: 0,
    },
    [Topper.UX]: {
        src: UX,
        srcLabeled: labeledUX,
        alt: 'user experience',
        link: PageUrl.UserExperience,
        percentage: 966 / 1470,
    },
    [Topper.SE]: {
        src: SE,
        srcLabeled: labeledSE,
        alt: 'software engineering',
        link: PageUrl.SoftwareEngineering,
        percentage: 1143 / 1470,
    },
    [Topper.HF]: {
        src: HF,
        srcLabeled: labeledHF,
        alt: 'human factors',
        link: PageUrl.HumanFactors,
        percentage: 715 / 1470,
    },
    [Topper.AE]: {
        src: AE,
        srcLabeled: labeledAE,
        alt: 'architectural engineering',
        link: PageUrl.ArchEngineering,
        percentage: 435 / 1470,
    },
    [Topper.AD]: {
        src: AD,
        srcLabeled: labeledAD,
        alt: 'architectural design',
        link: PageUrl.ArchDesign,
        percentage: 58 / 1470,
    },
}
