import './Review.css';


const Review = ({image,desc,name}) => {
    return(
        <div class="client">
            <img src={image} alt="client" />
            <div class="content">
                <p class="comment">{desc}</p>
                <p class="meta">{name}</p>
            </div>

        </div>
    )
}

export default Review;