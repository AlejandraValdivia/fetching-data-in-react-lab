import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StartshipSearch";
import StarshipList from "./components/StarshipList";

import { useState, useEffect } from "react";

import "./App.css";
const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await starshipService.defaultData();
        console.log(data.results);
        if (data) {
          const starshipsListItem = data.results.map((starship) => {
            return {
              class: starship.starship_class,
              manufacturer: starship.manufacturer,
              model: starship.model,
            };
          });
          console.log("starshipList", starshipsListItem);
          setStarships(starshipsListItem);
        }
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    fetchData();
  }, []);

  const fetchStarships = async (ship) => {
    const data = await starshipService.show(ship);
    const starshipsListItem = data.results.map((starship) => {
      return {
        class: starship.starship_class,
        manufacturer: starship.manufacturer,
        model: starship.model,
      };
    });
    setStarships(starshipsListItem);
  };

  return (
    <>
      <main>
        <h1>Star Wars API</h1>
        <p>Search for starships</p>
        <StarshipSearch fetchStarships={fetchStarships} />
        <StarshipList starships={starships} />
      </main>
    </>
  );
};

export default App;
