import { useState } from "react";
import Button from 'react-bootstrap/Button';

const StarshipSearch = ({ fetchStarships }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchStarships(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Button variant="dark" type="submit">Search</Button>
    </form>
  );
};

export default StarshipSearch;
