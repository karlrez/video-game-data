import React from "react";
import "./Game.css";
import gamePic from "../../Assets/game-console.png";
import OpenButton from "../OpenButton/OpenButton";

function Game(props) {
  const [plusIcon, setPlusIcon] = React.useState(true);

  const onPlusIconClick = () => {
    setPlusIcon(!plusIcon);
  };

  const getGameRating = () => {
    // Game object has attributes E,M,T with a boolean value,
    // so we just want the one thats set to 1
    const ratings = [
      props.gameData.RatingE,
      props.gameData.RatingM,
      props.gameData.RatingT,
    ];

    let rating;
    for (var i = 0; i < ratings.length; i++) {
      if (ratings[i] === "1") {
        rating = i;
      }

      switch (rating) {
        case 0:
          return "E";
        case 1:
          return "M";
        case 2:
          return "T";
        default:
          return "N/A"; // some dont have a rating
      }
    }
  };

  let gameRating = getGameRating();

  // Info subdiv is closed by default
  let subDiv = !plusIcon ? (
    <div className="game__info-div--subdiv" id="subdiv">
      <ul>
        <li id="used-price">
          <strong>Used Price:</strong> ${props.gameData.Usedprice}
        </li>
        <li id="console">
          <strong>Console:</strong> {props.gameData.Console}
        </li>
        <li id="genre">
          <strong>Genre:</strong> {props.gameData.Genre}
        </li>
        <li id="rating">
          <strong>Rating:</strong> {gameRating}
        </li>
        <br />
        <li id="publisher">
          <strong>Publisher: </strong>
          {props.gameData.Publisher}
        </li>
      </ul>
    </div>
  ) : null;

  return (
    <div className="game__wrapper">
      <div className="game__pic-div">
        <img src={gamePic} className="game__pic" alt="game pic" />
      </div>
      <div className="game__info-div">
        <h3 id="title">{props.gameData.Title}</h3>
        <ul className="game__info-div-ul">
          <li id="year-released">
            <strong>Year Realeased:</strong> {props.gameData.YearReleased}
          </li>
          <li id="sales">
            <strong>US Sales (Millions):</strong> $
            {props.gameData["US Sales (millions)"]}
          </li>
          <li id="review-score">
            <strong>Review Score:</strong> {props.gameData["Review Score"]}
          </li>
        </ul>
        {subDiv}
      </div>
      <div className="game__open-button-div">
        <OpenButton onClick={onPlusIconClick} plusIcon={plusIcon} />
      </div>
    </div>
  );
}

export default Game;
