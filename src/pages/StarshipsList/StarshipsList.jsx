import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StarshipsList = (props) => {
  const [ships, setShips] = useState([]);

  const fetchShips = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/starships/");
      const shipData = await response.json();
      setShips(shipData.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <div className="starships-list">
      {ships.map((ship) => {
        let { name, url } = ship;
        let path = url.split("/");
        const id = path[path.length - 2];

        return (
          <Link to={`/ships/${id}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default StarshipsList