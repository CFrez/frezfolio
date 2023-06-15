import type { ImageData } from '../types'

const baseFolder = '/projects/recipez/'

export enum RecipezImage {
    Main = 'recipe-main.png',
}

export const recipezPhotos: Record<RecipezImage, ImageData> = {
    [RecipezImage.Main]: {
        src: `${baseFolder}${RecipezImage.Main}`,
        alt: 'Main Recipe Page Mockup',
    },
}
