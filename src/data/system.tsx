import { ReactNode } from 'react'

import Anne from '../assets/avatar/anne.svg?react'
import Chris from '../assets/avatar/chris.svg?react'
import Coder from '../assets/avatar/coder.svg?react'
import Foodie from '../assets/avatar/foodie.svg?react'
import Hands from '../assets/avatar/hands.svg?react'
import Pen from '../assets/avatar/pen.svg?react'
import Qt from '../assets/avatar/qt.svg?react'

export interface Alter {
    name: string
    description: ReactNode
    avatar: ReactNode
}

export const alters: Alter[] = [
    {
        name: 'Anne',
        description: `She is the mother and dreamer. She is calm under pressure and best
            with the kids. She is able to listen and actually hold conversations.
            She is probably the one that annoys El the least. Computer thinks
            she is one of our psychopaths.... but I don't think so.`,
        avatar: <Anne />,
    },
    {
        name: 'Chris',
        description: `They are either gender fluid or masc (will use he pronouns for now).
            He is our protector. If "fuck" is coming out at least every other
            sentence you are probably in trouble and talking with Chris. He is
            the one that speaks our mind and makes sure we are taken care of.
            When I am physically sick, he is out a lot more. One of our more
            sexual people, and objectifies Ella in all the right ways.`,
        avatar: <Chris />,
    },
    {
        name: 'Pen',
        description: `Pen is short for Penelope. She is our performer. More info coming soon.`,
        avatar: <Pen />,
    },
    {
        name: 'qt',
        description: `The name was initially "quiet talker" but she liked when it
            was shortened to qt and sounded like cutie and it has stuck now. She
            is our covert vulnerable narcissist (there may also be more in the system).
            Fairly confident she is a narcissistic false self. Good podcast:
            https://www.youtube.com/watch?v=CcdVPdvHOso (other videos by him are
            very good as well) Her main emotions are fear and shame, and needs
            lots of reassurance that she isn't failing to not fall into a
            very dark hole. There is a chance that she is a little, we are unsure
            since not much personality or emotions come out. qt also incorporates
            someone we used to call "tasker" and is the one who is good at putting
            her head down and getting tasks accomplished. Unfortunately, if her
            predefined process or execution is interrupted there is a good chance
            of getting overwhelmed or melting down.`,
        avatar: <Qt />,
    },
    {
        name: 'hands',
        description: `This is our most "visibly" autistic person named after their
            stim of the left hand normally up near face with fingers constantly moving.
            We are currently thinking agender or non-binary. They are our logic,
            planning and besties with Computer. I think they are typically present,
            but usually don't take the front fully. They will come in for random
            parts of conversations and just for a sentence or two. The theory is
            they prefer not being in the front or "social". This might be due to
            the visible stim....`,
        avatar: <Hands />,
    },
    {
        name: 'Riley',
        description: `She is our programmer, designer, builder. She sometimes has
            a hand stim similar to hands, but "gentler". This may be due to a blend
            or something? For better or worse, she is good at tuning out the entire
            world when focused on an interesting challenge of whatever variety.`,
        avatar: <Coder />,
    },
    {
        name: 'Frankie',
        description: `He is the one that actually tastes our food, which unfortunately
            doesn't happen often enough. There is high probability that he is a bear.
            He is not very verbal, and may have tried to eat Ella once....`,
        avatar: <Foodie />,
    },
]
