import React from "react";
import "./Coin.css";

export default function Coin(props) {
  const { name, image, price, id } = props.coin;
  return (
    <div className="coin">
      <div className="coin-details">
        <img src={image} />
        <p>{name}</p>
        <p>Price: ${price}</p>
      </div>

      <div className="coin-btns">
        <button
          style={{ background: "orange" }}
          onClick={() => props.setEditing(id)}
        >
          <i className="far fa-edit" />
        </button>

        <button
          style={{ background: "red" }}
          onClick={() => props.deleteCoin(id)}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}
