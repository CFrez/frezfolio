const baseFolder = '/projects/emotions'

import type { ImageData } from '@/types'

import Angry from '../../public/projects/emotions/angry.svg?react'
import Annoyed from '../../public/projects/emotions/annoyed.svg?react'
import Bored from '../../public/projects/emotions/bored.svg?react'
import Confused from '../../public/projects/emotions/confused.svg?react'
import Curious from '../../public/projects/emotions/curious.svg?react'
import Discomfort from '../../public/projects/emotions/discomfort.svg?react'
import Distracted from '../../public/projects/emotions/distracted.svg?react'
import Empty from '../../public/projects/emotions/empty.svg?react'
import Excited from '../../public/projects/emotions/excited.svg?react'
import Fearful from '../../public/projects/emotions/fearful.svg?react'
import Focused from '../../public/projects/emotions/focused.svg?react'
import Happy from '../../public/projects/emotions/happy.svg?react'
import Hopeful from '../../public/projects/emotions/hopeful.svg?react'
import Lonely from '../../public/projects/emotions/lonely.svg?react'
import Overwhelmed from '../../public/projects/emotions/overwhelmed.svg?react'
import Peaceful from '../../public/projects/emotions/peaceful.svg?react'
import Sad from '../../public/projects/emotions/sad.svg?react'
import Stressed from '../../public/projects/emotions/stressed.svg?react'
import Surprised from '../../public/projects/emotions/surprised.svg?react'
import Vulnerable from '../../public/projects/emotions/vulnerable.svg?react'

export const emotionsPhotos: Record<string, ImageData> = {
    angry: {
        src: `${baseFolder}/angry.svg`,
        element: Angry,
        alt: 'Angry',
    },
    annoyed: {
        src: `${baseFolder}/annoyed.svg`,
        element: Annoyed,
        alt: 'Annoyed',
    },
    bored: {
        src: `${baseFolder}/bored.svg`,
        element: Bored,
        alt: 'Bored',
    },
    confused: {
        src: `${baseFolder}/confused.svg`,
        element: Confused,
        alt: 'Confused',
    },
    curious: {
        src: `${baseFolder}/curious.svg`,
        element: Curious,
        alt: 'Curious',
    },
    discomfort: {
        src: `${baseFolder}/discomfort.svg`,
        element: Discomfort,
        alt: 'Discomfort',
    },
    distracted: {
        src: `${baseFolder}/distracted.svg`,
        element: Distracted,
        alt: 'Distracted',
    },
    empty: {
        src: `${baseFolder}/empty.svg`,
        element: Empty,
        alt: 'Empty',
    },
    excited: {
        src: `${baseFolder}/excited.svg`,
        element: Excited,
        alt: 'Excited',
    },
    fearful: {
        src: `${baseFolder}/fearful.svg`,
        element: Fearful,
        alt: 'Fearful',
    },
    focused: {
        src: `${baseFolder}/focused.svg`,
        element: Focused,
        alt: 'Focused',
    },
    happy: {
        src: `${baseFolder}/happy.svg`,
        element: Happy,
        alt: 'Happy',
    },
    hopeful: {
        src: `${baseFolder}/hopeful.svg`,
        element: Hopeful,
        alt: 'Hopeful',
    },
    lonely: {
        src: `${baseFolder}/lonely.svg`,
        element: Lonely,
        alt: 'Lonely',
    },
    overwhelmed: {
        src: `${baseFolder}/overwhelmed.svg`,
        element: Overwhelmed,
        alt: 'Overwhelmed',
    },
    peaceful: {
        src: `${baseFolder}/peaceful.svg`,
        element: Peaceful,
        alt: 'Peaceful',
    },
    sad: {
        src: `${baseFolder}/sad.svg`,
        element: Sad,
        alt: 'Sad',
    },
    stressed: {
        src: `${baseFolder}/stressed.svg`,
        element: Stressed,
        alt: 'Stressed',
    },
    surprised: {
        src: `${baseFolder}/surprised.svg`,
        element: Surprised,
        alt: 'Surprised',
    },
    vulnerable: {
        src: `${baseFolder}/vulnerable.svg`,
        element: Vulnerable,
        alt: 'Vulnerable',
    },
}
