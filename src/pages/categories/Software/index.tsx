import { CategoryInfo, ProjectData } from '@/app/types'

import { animalsProject } from './Animals'

export const softwareProjects: ProjectData[] = [animalsProject]

export const softwareInfo: CategoryInfo = {
    category: 'Software',
    info: (
        <>
            <p>
                I grew up with a mom who was a Software Engineer, and I remember
                practicing math with a program she created in DOS (I might have just
                aged myself there!). She always complained about having a "desk job," so
                I never considered Software Engineering. However, after marrying a
                software engineer and realizing it doesn&apos;t have to be just a "desk
                job," I decided to give it a try.
            </p>
            <p>
                Since I have a design background, I began my engineering journey with
                HTML and CSS, quickly progressing to React after taking an online
                course. Fortunately, my partner helped guide me along the way. I&apos;ve
                worked on several projects, including this website, and my experience
                has expanded to include backend work as well.
            </p>
            <p>
                I haven't decided if I prefer frontend or backend development, but I
                often end up focusing on the frontend. I enjoy the creativity and design
                involved, but I also appreciate the logic and problem-solving of backend
                work. Ultimately, I prefer to contribute where I can be most beneficial
                to the team and project, which in a perfect world would be a mix of
                both.
            </p>
        </>
    ),
}
