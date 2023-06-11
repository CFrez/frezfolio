import type { ImageData } from '../types'

const baseFolder = '/projects/nellis/'

export enum NellisImage {
    Initial = 'initial.jpg',
    SIPOC = 'sipoc.jpg',
    SurgerySIPOC = 'surgerysipoc.svg',
    ORSIPOC = 'orsipoc.svg',
    HybridMockup = 'hybridmockup.jpg',
    HybridFinal = 'hybridfinal.jpg',
    Final = 'final.jpg',
}

export const nellisPhotos: Record<NellisImage, ImageData> = {
    [NellisImage.Initial]: {
        src: `${baseFolder}${NellisImage.Initial}`,
        alt: 'Nellis operating room before construction.',
        caption: 'Original Operating Room'
    },
    [NellisImage.SIPOC]: {
        src: `${baseFolder}${NellisImage.SIPOC}`,
        alt: 'SIPOC map during design.',
        caption: 'SIPOC Map'
    },
    [NellisImage.SurgerySIPOC]: {
        src: `${baseFolder}${NellisImage.SurgerySIPOC}`,
        alt: 'Final SIPOC map for surgery department.',
        caption: 'Surgery SIPOC Map'
    },
    [NellisImage.ORSIPOC]: {
        src: `${baseFolder}${NellisImage.ORSIPOC}`,
        alt: 'Final SIPOC map for operating room.',
        caption: 'OR SIPOC Map'
    },
    [NellisImage.HybridMockup]: {
        src: `${baseFolder}${NellisImage.HybridMockup}`,
        alt: 'Nellis hybrid operating room mockup.',
        caption: 'Hybrid Operating Room Mockup'
    },
    [NellisImage.HybridFinal]: {
        src: `${baseFolder}${NellisImage.HybridFinal}`,
        alt: 'Nellis hybrid operating room almost complete.',
        caption: 'Constructed Hybrid Operating Room'
    },
    [NellisImage.Final]: {
        src: `${baseFolder}${NellisImage.Final}`,
        alt: 'Nellis operating room at completion.',
        caption: 'Completed Operating Room'
    },
}