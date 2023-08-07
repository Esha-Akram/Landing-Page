import './Team.css';
import Member from '../../Shared/member/Member';
import Image from '../../assets/team/01.jpg';
import Image1 from '../../assets/team/02.jpg';
import Image2 from '../../assets/team/03.jpg';
import Image3 from '../../assets/team/04.jpg';

function Team() {
    return (
        <div id="team">
            <h2>Meet the Team</h2>
            <p>Introducing Our Highly Skilled and Dedicated Team of Software Professionals</p>
            <div class="row">
                <Member image={Image} name="John Doe" position="CEO & Founder"/>
                <Member image={Image1} name="John Doe" position="CEO & Founder"/>
                <Member image={Image2} name="John Doe" position="CEO & Founder"/>
                <Member image={Image3} name="John Doe" position="CEO & Founder"/>
            </div>
        </div>

    )
}

export default Team;