import './Testimonial.css';
import Review from '../../Shared/review/Review';
import Image from '../../assets/testimonials/01.jpg';
import Image1 from '../../assets/testimonials/02.jpg';
import Image2 from '../../assets/testimonials/03.jpg';
import Image3 from '../../assets/testimonials/04.jpg';
import Image4 from '../../assets/testimonials/05.jpg';
import Image5 from '../../assets/testimonials/06.jpg';
function Testimonial() {
    return (
        <div id="testimonial">
            <h2>What our Clients say</h2>
            <div class="row">
                <Review image={Image} desc="Cyber Nexis Tech Software Solutions delivered a top-notch software 
            solution that transformed our business processes. Their professionalism and expertise were truly impressive." name="- John Smith" />
                <Review image={Image1} desc="Cyber Nexis Tech Software Solutions delivered a top-notch software 
            solution that transformed our business processes. Their professionalism and expertise were truly impressive." name="- John Smith" />
                <Review image={Image2} desc="Cyber Nexis Tech Software Solutions delivered a top-notch software 
            solution that transformed our business processes. Their professionalism and expertise were truly impressive." name="- John Smith" />
                <Review image={Image3} desc="Cyber Nexis Tech Software Solutions delivered a top-notch software 
            solution that transformed our business processes. Their professionalism and expertise were truly impressive." name="- John Smith" />
                <Review image={Image4} desc="Cyber Nexis Tech Software Solutions delivered a top-notch software 
            solution that transformed our business processes. Their professionalism and expertise were truly impressive." name="- John Smith" />
                <Review image={Image5} desc="Cyber Nexis Tech Software Solutions delivered a top-notch software 
            solution that transformed our business processes. Their professionalism and expertise were truly impressive." name="- John Smith" />
            </div>

        </div>
    )
}

export default Testimonial;