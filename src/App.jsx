import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StartshipSearch";
import StarshipList from "./components/StarshipList";
import Loading from "./components/Loading";

import { useState, useEffect } from "react";

import "./App.css";
const App = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await starshipService.defaultData();
        if (data && data.results) {
          const starshipsListItem = data.results.map(
            ({ starship_class, manufacturer, model }) => ({
              class: starship_class,
              manufacturer,
              model,
            })
          );
          setLoading(false);
          setStarships(starshipsListItem);
        }
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    fetchData();
  }, []);

  const fetchStarships = async (ship) => {
    try {
      const data = await starshipService.show(ship);
      if (data && data.results) {
        const starshipsListItem = data.results.map(
          ({ starship_class, manufacturer, model }) => ({
            class: starship_class,
            manufacturer,
            model,
          })
        );
        setStarships(starshipsListItem);
      }
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  };

  return (
    <>
      {loading && <Loading />}
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
