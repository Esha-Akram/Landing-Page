import './About.css';
import Image from '../../assets/about.jpg';

function About() {
    return (
        <div id="about">
            <div class="row">
                <div class="profile">
                    <img src={Image} alt="profile" />
                </div>
                <div class="content">
                    <h2>About Us</h2>
                    <p>Cyber Nexis Tech Software Solutions is a leading software development company specializing in creating cutting-edge solutions for businesses. Our team of
                        experts is dedicated to delivering high-quality software that meets the unique needs of our clients.</p>
                    <h3>Why Choose Us?</h3>
                    <div class="list">
                        <div class="col-6">
                            <ul>
                                <li>Customized Solutions</li>
                                <li>Industry Expertise</li>
                                <li>Reliable Support</li>
                                <li>Agile Development</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li> Scalable Infrastructure</li>
                                <li>User-Friendly Interfaces</li>
                                <li> Continuous Improvement</li>
                                <li>Data Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;