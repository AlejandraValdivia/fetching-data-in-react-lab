const BASE_URL = `https://swapi.dev/api/starships`;

const show = async (ship) => {
  try {
    const queryString = `?search=${ship}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const defaultData = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { show, defaultData };
