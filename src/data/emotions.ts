import type { ImageData } from '../types'

const baseFolder = '/projects/emotions/'

export enum EmotionsImage {
    Angry = 'angry.svg',
    Annoyed = 'annoyed.svg',
    Bored = 'bored.svg',
    Confused = 'confused.svg',
    Curious = 'curious.svg',
    Discomfort = 'discomfort.svg',
    Distracted = 'distracted.svg',
    Empty = 'empty.svg',
    Excited = 'excited.svg',
    Fearful = 'fearful.svg',
    Focused = 'focused.svg',
    Happy = 'happy.svg',
    Hopeful = 'hopeful.svg',
    Lonely = 'lonely.svg',
    Overwhelmed = 'overwhelmed.svg',
    Peaceful = 'peaceful.svg',
    Sad = 'sad.svg',
    Stressed = 'stressed.svg',
    Surprised = 'surprised.svg',
    Vulnerable = 'vulnerable.svg',
}

export const emotionsPhotos: Record<EmotionsImage, ImageData> = {
    [EmotionsImage.Angry]: {
        src: `${baseFolder}${EmotionsImage.Angry}`,
        alt: 'Angry',
    },
    [EmotionsImage.Annoyed]: {
        src: `${baseFolder}${EmotionsImage.Annoyed}`,
        alt: 'Annoyed',
    },
    [EmotionsImage.Bored]: {
        src: `${baseFolder}${EmotionsImage.Bored}`,
        alt: 'Bored',
    },
    [EmotionsImage.Confused]: {
        src: `${baseFolder}${EmotionsImage.Confused}`,
        alt: 'Confused',
    },
    [EmotionsImage.Curious]: {
        src: `${baseFolder}${EmotionsImage.Curious}`,
        alt: 'Curious',
    },
    [EmotionsImage.Discomfort]: {
        src: `${baseFolder}${EmotionsImage.Discomfort}`,
        alt: 'Discomfort',
    },
    [EmotionsImage.Distracted]: {
        src: `${baseFolder}${EmotionsImage.Distracted}`,
        alt: 'Distracted',
    },
    [EmotionsImage.Empty]: {
        src: `${baseFolder}${EmotionsImage.Empty}`,
        alt: 'Empty',
    },
    [EmotionsImage.Excited]: {
        src: `${baseFolder}${EmotionsImage.Excited}`,
        alt: 'Excited',
    },
    [EmotionsImage.Fearful]: {
        src: `${baseFolder}${EmotionsImage.Fearful}`,
        alt: 'Fearful',
    },
    [EmotionsImage.Focused]: {
        src: `${baseFolder}${EmotionsImage.Focused}`,
        alt: 'Focused',
    },
    [EmotionsImage.Happy]: {
        src: `${baseFolder}${EmotionsImage.Happy}`,
        alt: 'Happy',
    },
    [EmotionsImage.Hopeful]: {
        src: `${baseFolder}${EmotionsImage.Hopeful}`,
        alt: 'Hopeful',
    },
    [EmotionsImage.Lonely]: {
        src: `${baseFolder}${EmotionsImage.Lonely}`,
        alt: 'Lonely',
    },
    [EmotionsImage.Overwhelmed]: {
        src: `${baseFolder}${EmotionsImage.Overwhelmed}`,
        alt: 'Overwhelmed',
    },
    [EmotionsImage.Peaceful]: {
        src: `${baseFolder}${EmotionsImage.Peaceful}`,
        alt: 'Peaceful',
    },
    [EmotionsImage.Sad]: {
        src: `${baseFolder}${EmotionsImage.Sad}`,
        alt: 'Sad',
    },
    [EmotionsImage.Stressed]: {
        src: `${baseFolder}${EmotionsImage.Stressed}`,
        alt: 'Stressed',
    },
    [EmotionsImage.Surprised]: {
        src: `${baseFolder}${EmotionsImage.Surprised}`,
        alt: 'Surprised',
    },
    [EmotionsImage.Vulnerable]: {
        src: `${baseFolder}${EmotionsImage.Vulnerable}`,
        alt: 'Vulnerable',
    },
}
