import type { ImageData } from '../types'

const baseFolder = '/projects/mindlog/'

export enum MindlogImage {
    Today = 'today.png',
    Summary = 'summary.png',
    NewLog = 'new_log.png',
    EditLog = 'edit_log.png',
}

export const mindlogPhotos: Record<MindlogImage, ImageData> = {
    [MindlogImage.Today]: {
        src: `${baseFolder}${MindlogImage.Today}`,
        alt: 'Actual Today Page',
    },
    [MindlogImage.Summary]: {
        src: `${baseFolder}${MindlogImage.Summary}`,
        alt: 'Summary Page',
    },
    [MindlogImage.NewLog]: {
        src: `${baseFolder}${MindlogImage.NewLog}`,
        alt: 'New Entry Page',
    },
    [MindlogImage.EditLog]: {
        src: `${baseFolder}${MindlogImage.EditLog}`,
        alt: 'Edit Entry Page',
    },
}
