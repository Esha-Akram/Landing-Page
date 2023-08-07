import './Model.css';

const Model = (props) => {
    return (
        <div class="model" >
            <a href={props.image} title={props.title} class="model">
                <img src={props.image}></img>
            </a>
        </div>

    )
}

export default Model;