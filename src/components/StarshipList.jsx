import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  const ship = props.starships.map((starship) => {
    console.log(starship._id);
    return <StarshipCard key={starship._id} starship={starship} />;
  });
  return (
    <section>
      <ul>{ship}</ul>
    </section>
  );
};

export default StarshipList;
