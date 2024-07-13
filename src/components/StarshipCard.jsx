import Card from "react-bootstrap/Card";

const StarshipCard = (props) => {
  return (
    <Card key={props.starship._id} className="card">
      <Card.Body>
        <h1>{props.starship.name}</h1>
        <p>Class: {props.starship.class}</p>
        <p>Manufacturer: {props.starship.manufacturer}</p>
        <p>Model: {props.starship.model}</p>
      </Card.Body>
    </Card>
  );
};

export default StarshipCard;
