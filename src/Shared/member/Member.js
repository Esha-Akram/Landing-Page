import './Member.css';

const Member = ({image,name,position}) => {
    return(
        <div class="member">
            <img src={image}></img>
            <h4>{name}</h4>
            <p>{position}</p>
        </div>
    )
}

export default Member; 