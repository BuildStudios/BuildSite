import UnrealIcon from '../../img/ue4.png'
import HTMLIcon from '../../img/html.png'
import JavaIcon from '../../img/java.png'

import '../../scss/page.scss'

function About() {
    return (
        <div>
            <h1>About Us</h1>
        <h3>Here you will learn about us</h3>
        <p>
            We are a team of developers, designer and testers who make apps and games(more games) and we are always looking for new ideas and new games.
            We work with Unreal Engine<img class="mini-text-image" src={UnrealIcon} alt="ue4-img"></img>,
            HTML<img class="mini-text-image" src={HTMLIcon} alt="html-img"></img> and Java<img class="mini-text-image" src={JavaIcon} alt="java-img"></img>.
            
            <h3>We are looking for:</h3>

            <ul>
                <li>More Developers</li>
                <li>More Designers</li>
                <li>More Testers</li>
            </ul>

            <blockquote><i>If you want to contact with us for work in BuildStudios, go to Contact Page</i></blockquote>
        </p>
        </div>
    )
}

export default About;