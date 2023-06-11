import type { ImageData } from '../types'


const baseFolder = '/projects/animals/'

export const animalsPhotos: ImageData[] = [
    {
        src: `${baseFolder}dashboard.png`,
        alt: 'Main Animal Dashboard',
    },
    {
        src: `${baseFolder}home.png`,
        alt: 'Expanded Home Page',
    },
    {
        src: `${baseFolder}new-animal.png`,
        alt: 'Create New Animal',
    },
    {
        src: `${baseFolder}edit-animal.png`,
        alt: 'Update Animal',
    },
    {
        src: `${baseFolder}stats.png`,
        alt: 'Statistics Page',
    },
    {
        src: `${baseFolder}history.png`,
        alt: 'Animal History List',
    },
    {
        src: `${baseFolder}new-record.png`,
        alt: 'New Record for Animal',
    },
    {
        src: `${baseFolder}edit-record.png`,
        alt: 'Edit Record for Animal',
    },
    {
        src: `${baseFolder}quick.png`,
        alt: 'Animal Quick View',
    },
]
