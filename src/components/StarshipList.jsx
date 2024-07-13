import StarshipCard from "./StarshipCard";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const StarshipList = (props) => {
  const ship = props.starships.map((starship) => {
    console.log(starship._id);
    return (
      <Card style={{ width: '18rem' }} key={starship._id}>
      <ListGroup variant="flush">
        <ListGroup.Item>{starship.name}</ListGroup.Item>
        <ListGroup.Item>{starship.class}</ListGroup.Item>
        <ListGroup.Item>{starship.manufacturer}</ListGroup.Item>
        <ListGroup.Item>{starship.model}</ListGroup.Item>
      </ListGroup>
    </Card>
    )
  });
  return (
    <section>
      <ul>{ship}</ul>
    </section>
  );
};

export default StarshipList;
