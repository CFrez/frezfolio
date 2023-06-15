import type { ImageData } from '../types'

const baseFolder = '/projects/unbtrees/'

export enum UnbtreesImage {
    Logo = 'citylogo.png',
    Contract = 'contract.svg',
    FlyerFront = 'flyer-front.svg',
    FlyerBack = 'flyer-back.svg',
    WoodSign = 'free-wood.svg',
    BCFront = 'SqBC_Front.png',
    BCBack = 'SqBC_Back.png',
    YardSign = 'yard-sign.svg',
}

export const unbtreesPhotos: Record<UnbtreesImage, ImageData> = {
    [UnbtreesImage.Logo]: {
        src: `${baseFolder}${UnbtreesImage.Logo}`,
        alt: 'Primary Logo with City Roots',
    },
    [UnbtreesImage.Contract]: {
        src: `${baseFolder}${UnbtreesImage.Contract}`,
        alt: 'Contract',
    },
    [UnbtreesImage.FlyerFront]: {
        src: `${baseFolder}${UnbtreesImage.FlyerFront}`,
        alt: 'Flyer Front',
    },
    [UnbtreesImage.FlyerBack]: {
        src: `${baseFolder}${UnbtreesImage.FlyerBack}`,
        alt: 'Flyer Back',
    },
    [UnbtreesImage.WoodSign]: {
        src: `${baseFolder}${UnbtreesImage.WoodSign}`,
        alt: 'Free Wood Sign',
    },
    [UnbtreesImage.BCFront]: {
        src: `${baseFolder}${UnbtreesImage.BCFront}`,
        alt: 'Business Card Front',
    },
    [UnbtreesImage.BCBack]: {
        src: `${baseFolder}${UnbtreesImage.BCBack}`,
        alt: 'Business Card Back',
    },
    [UnbtreesImage.YardSign]: {
        src: `${baseFolder}${UnbtreesImage.YardSign}`,
        alt: 'Yard Sign',
    },
}
