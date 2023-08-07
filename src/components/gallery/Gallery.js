import './Gallery.css';
import Model from '../../Shared/model/Model'
import Image from '../../assets/gallery/01-small.jpg';
import Image1 from '../../assets/gallery/02-small.jpg';
import Image2 from '../../assets/gallery/03-small.jpg';
import Image3 from '../../assets/gallery/04-small.jpg';
import Image4 from '../../assets/gallery/05-small.jpg';
import Image5 from '../../assets/gallery/06-small.jpg';
import Image6 from '../../assets/gallery/07-small.jpg';
import Image7 from '../../assets/gallery/08-small.jpg';
import Image8 from '../../assets/gallery/09-small.jpg';

function Gallery() {
    return (
        <div id="gallery">
            <h2>Gallery</h2>
            <p>Discover Our Vast and Diverse Portfolio of Innovative Projects</p>
            <div class="row">
                <Model image={Image} title="Project title 1" />
                <Model image={Image1} title="Project title 1" />
                <Model image={Image2} title="Project title 1" />
                <Model image={Image3} title="Project title 1" />
                <Model image={Image4} title="Project title 1" />
                <Model image={Image5} title="Project title 1" />
                <Model image={Image6} title="Project title 1" />
                <Model image={Image7} title="Project title 1" />
                <Model image={Image8} title="Project title 1" />
            </div>

        </div>
    )
}

export default Gallery;