import { ReactNode } from 'react'

import Anne from '../assets/avatar/anne.svg?react'
import V from '../assets/avatar/V.svg?react'
import S from '../assets/avatar/S.svg?react'
import Q from '../assets/avatar/Q.svg?react'
import Coder from '../assets/avatar/coder.svg?react'
import Foodie from '../assets/avatar/foodie.svg?react'
import Tina from '../assets/avatar/tina.svg?react'
import Pen from '../assets/avatar/pen.svg?react'
import Qt from '../assets/avatar/qt.svg?react'

export interface Alter {
    name: string
    description: ReactNode
    avatar: ReactNode
}

export const alters: Alter[] = [
    {
        name: 'tina',
        description: `She is our most noticeably autistic person. She is around 6
            years old. She stutters as the beginning of most sentences, especially
            when she is feeling overwhelmed. Two "coping" mechanisms to try and not
            stutter are to talk really fast or have a hand stim while she organizes
            the words in her head. She has extreme anxiety and is very sensitive to
            sensory input especially sound. She is where a lot of our shame and guilt
            come from, and she is one of our primary fronters. When she gets overwhelmed
            she likes to hide in dark places like closets or bathrooms. She can also
            help calm down by rocking back and forth.`,
        avatar: <Tina />,
    },
    {
        name: 'Riley',
        description: `She is our programmer, designer, builder. She is around 18
            years old. She is very self sacrificial and most likely BPD. Most of
            her anxiety comes from impacting someone in any way. She sometimes
            has a hand stim similar to Tina, but "gentler". This may be due to a
            blend or something? For better or worse, she is good at tuning out
            the entire world when focused on an interesting challenge of whatever
            variety.`,
        avatar: <Coder />,
    },
    {
        name: 'Anne',
        description: `She is a psychopath, and most likely she has NPD. The only
            person she might care about is Ella. Her mind is fascinating and a
            little scary. She rarely fronts but almost always has a presence.`,
        avatar: <Anne />,
    },
    {
        name: 'S',
        description: `She is a younger version of Anne, mostly through how emotions
            are felt. This may or may not be valid anymore based on recent realizations.
            She is one of our primary fronters and drives Ella insane for the amount
            of deflection she tries to get away with. She also has a stutter but it
            usually ends up in the middle of sentences. She will commonly repeat
            'umm' or 'and' instead of repeating a random word. She also will narrate
            as she is executing tasks in order to stay on track.`,
        avatar: <S />,
    },
    {
        name: 'Pen',
        description: `Pen is short for Penelope. She is our performer. When she shows
            up it is usually with a random accent or a joke of some sort. She can
            sing better than our other members and loves to do so. High probability
            she is a sadist.`,
        avatar: <Pen />,
    },
    {
        name: 'qt',
        description: `The name was initially "quiet talker" but she liked when it
            was shortened to qt and sounded like cutie and it has stuck now. She
            is either 3 or 4 years old. Mostly she is described as "adorable" because
            she is almost always happy/bubbly. She is our "tattle tale" mostly
            because someone in the system would be proud of something and she excitedly
            would go tell Ella, all of the master plans...`,
        avatar: <Qt />,
    },
    {
        name: 'Q',
        description: `She is an older version of qt and is around 15 years old. She
            is a good baby sitter, and loves to play with the kids. `,
        avatar: <Q />,
    },
    {
        name: 'V',
        description: `They are non-binary and adamant you use the correct (they/them)
            pronouns. They are one of our protectors. If "fuck" is coming out at
            least every other sentence you are probably in trouble and talking
            with V. They are the one that speaks our mind and makes sure we are
            taken care of. When I am physically sick, they are out a lot more. One
            of our more sexual people, and objectifies Ella in all the right ways.`,
        avatar: <V />,
    },
    {
        name: 'Frankie',
        description: `He is the one that actually tastes our food, which unfortunately
            doesn't happen often enough. There is high probability that he is a bear.
            He is not very verbal, and may have tried to eat Ella once....`,
        avatar: <Foodie />,
    },
]
