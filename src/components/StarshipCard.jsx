const StarshipCard = (props) => {
    return (
        <li className="card">
            <h1>{props.starship.name}</h1>
            <p>Class: {props.starship.class}</p>
            <p>Manufacturer: {props.starship.manufacturer}</p>
            <p>Model: {props.starship.model}</p>
        </li>
    )
}

export default StarshipCard;