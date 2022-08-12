import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import getRestaurants from "../services/fetch/queries/getRestaurants";

const Restaurants = (props: any) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  // get data onmount:
  useEffect(() => {
    setLoading(true);
    getRestaurants(0, 50)
      .then((data) => {
        setRestaurants(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="list">
        {Array(12)
          .fill(null)
          .map((n, i) => (
            <Loading key={i} />
          ))}
      </div>
    );
  }

  return (
    <div className="list">
      {restaurants.map((restaurant: any) => (
        <div className="item" key={restaurant.uid}>
          <h4>{restaurant.uid}</h4>
          <span>{restaurant.total}</span>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
