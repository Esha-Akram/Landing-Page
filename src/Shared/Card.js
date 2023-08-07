import './Card.css';
const Card = ({title,desc,icon}) => {
    return (
        <div class="col-md-3 col-md-4">
            <i class={icon}></i>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Card;