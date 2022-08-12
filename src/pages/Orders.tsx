import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import getPastOrders from "../services/fetch/queries/getPastOrders";

const Orders = (props: any) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // get data onmount:
  useEffect(() => {
    setLoading(true);
    getPastOrders(0, 50)
      .then((data) => {
        setOrders(data);
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
      {orders.map((order: any) => (
        <div className="item" key={order.uid}>
          <h4>{order.uid}</h4>
          <span>{order.total}</span>
        </div>
      ))}
    </div>
  );
};

export default Orders;
