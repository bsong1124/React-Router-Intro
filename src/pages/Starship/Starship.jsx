import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Starship = (props) => {
  const { id } = useParams();

  // console.log(params) => returns an object {}
  // grabbing the ship id from the URL Params {}
  // our Route path is: "/ships/:symbol"
  // the part of the string that starts with a : is treated as a variable
  // react router will store the actual url string (the starship id) in the params object

  // Using the other two variables to create our URL
  const url = `https://swapi.dev/api/starships/${id}`;

  //state to hold the coin data
  const [starship, setStarship] = useState(null);

  //function to fetch coin data
  const getStarship = async () => {
    try {
      const response = await fetch(url);
      const shipData = await response.json();
      console.log(shipData);
      setStarship(shipData);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getStarship();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    console.log(starship);
    return <div>{/* update JSX */}</div>;
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return <section>{starship ? loaded() : loading()}</section>;
};

export default Starship