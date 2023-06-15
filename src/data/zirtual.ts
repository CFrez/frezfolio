import type { ImageData } from '../types'

const baseFolder = '/projects/zirtual/'

export enum ZirtualImage {
    Initial = 'hiring1.png',
    Final = 'hiring2.png',
}

export const zirtualPhotos: Record<ZirtualImage, ImageData> = {
    [ZirtualImage.Initial]: {
        src: `${baseFolder}${ZirtualImage.Initial}`,
        alt: 'Initial Hiring Workload',
    },
    [ZirtualImage.Final]: {
        src: `${baseFolder}${ZirtualImage.Final}`,
        alt: 'Projected Hiring Workload',
    },
}
