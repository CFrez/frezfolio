import { categorySet } from '../data'

export default function Home() {
    return (
        <>
            <h1>Hello World!</h1>
            <h2>Welcome to my Wonderous World of Design!</h2>

            <hr/>

            <h3>Design comes in many shapes and forms, a few that I engage in include:</h3>


            {categorySet.map((category) => (
                <div className="icon-label" key={category.name}>
                    <span className="material-icons">{category.icon}</span>
                    {category.name}
                </div>
            ))}

            <hr/>

            <div className="contact-me">
                <h3>Places you can find me:</h3>
                <a href="https://www.linkedin.com/in/cfrezynski/">
                    <img src="/images/linkedin.png"/>
                </a>
                <a href="https://github.com/RedFrez/">
                    <img src="/images/github.svg"/>
                </a>
                <a href="https://www.thingiverse.com/redfrez/designs">
                    Thingiverse
                </a>
            </div>
        </>
    )
}
