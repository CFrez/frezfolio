import type { ImageData } from '../types'

const baseFolder = '/projects/labview/'

export enum LabViewImage {
    Initial = 'initial.svg',
    GUI = 'gui.png',
}

export const labViewPhotos: Record<LabViewImage, ImageData> = {
    [LabViewImage.Initial]: {
        src: `${baseFolder}${LabViewImage.Initial}`,
        alt: 'Initial GUI Design',

    },
    [LabViewImage.GUI]: {
        src: `${baseFolder}${LabViewImage.GUI}`,
        alt: 'Final GUI Design',
    },
}